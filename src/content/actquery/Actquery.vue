<template>
  <div class="main">
    <Header @listenHeader="showHeaderMsg"></Header>
    <Body></Body>
  </div>
</template>

<script>
    import axios from 'axios'
    import Header from "./components/Header"
    import Body from  "./components/Body"
    import store from '@/store'
    import { mapGetters } from 'vuex' // 引入Vuex数据
    export default {
        name: "Actquery",
        data() {
          return {
            batchs: []
          }
        },
        // 打散数据，取出vuex数据
        computed: {
          ...mapGetters([
            'phoneno',
            'code',
            'sdate',
            'edate'
          ])
        },
        components: {
          Header: Header,
          Body: Body
        },
        mounted () {
          this.batchno();
        },
        methods: {
          batchno() {
            var url = '/operplat/batch_act/batchQuery/' + this.code;
            axios.get(url,{
              params: {
                "phoneno":this.phoneno,
                "sdate":this.sdate,
                "edate":this.edate
              }
            })
              .then(res => {
                this.batchs = res.data.batchs;
                this.$store.dispatch('setBatchs', res.data.batchs); //vuex存入值
              })
          },
          showHeaderMsg: function () {
            this.batchno();
          }
        }
    }
</script>

<style lang="stylus" scoped>
.main
  background-color azure
</style>
