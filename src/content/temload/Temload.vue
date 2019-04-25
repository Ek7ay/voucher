<template>
  <div class="main">
    <upload @listenToChildEvent="showMsgFromChild"></upload>
    <AlertSucc v-show="succ" :Msgs="count" :Msgss="amt"
               @listenToChildEvent="hideSucc"
               @listenToChildEvent2="sure"
    ></AlertSucc>
    <alert-fail v-if="fail" @listenToChildEvent="hideFail"></alert-fail>
    <err-list
      v-if="err"
      :Msg="errorList"
    ></err-list>
  </div>
</template>

<script>
    import Upload from './components/Upload'
    import AlertSucc from './components/AlertSucc'
    import AlertFail from './components/AlertFail'
    import ErrList from './components/ErrList'
    import axios from 'axios'
    import store from '@/store'
    import { mapGetters } from 'vuex' // 引入Vuex数据
    export default {
        name: "Temload",
        data() {
          return{
            succ: false,
            fail: false,
            err: false,
            formdata: "",
            errorList: "",
            count: "",
            amt: "",
          }
        },
        computed: {
          ...mapGetters([
            'code'
          ])
        },
        components: {
          Upload: Upload,
          AlertSucc: AlertSucc,
          AlertFail: AlertFail,
          ErrList: ErrList
        },
        methods: {
          showMsgFromChild(data) {
            this.formdata = data;
            var url = "/operplat/batch_act/impAndActCheck/" + this.code;
            axios.post(url, data)
              .then(res => {
                if (res.data.errorList != "") {
                  this.errorList = res.data.errorList;
                  this.err = true;
                  this.fail = true;
                }
                if (res.data.retCode == "success") {
                  this.succ = true;
                  this.count = res.data.count;
                  this.amt = res.data.amt;
                }
              })
          },
          hideFail() {
            this.fail = false
          },
          hideSucc() {
            this.succ = false
          },
          sure() {
            var url = "/operplat/batch_act/impAndAct/" + this.code;
            axios.post(url, this.formdata)
              .then(res => {
                alert(res.data.retMsg)
              })
          }
        }
    }
</script>

<style lang="stylus" scoped>
.main
  background-color #f2f0f7
</style>
