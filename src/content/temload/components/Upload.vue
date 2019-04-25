<template>
  <div class="main">
    <div class="load-box">
      <div class="load">
        <div class="up" @click="upload">
          <span class="uptext">{{pla}}</span>
        </div>
        <a
          class="down"
          download=""
          :href="href"
        >模板下载</a>
        <form enctype="multipart/form-data" ref="form" v-show="false">
          <input type="file" name="batch_file" ref="file" @change="changefile($event)"/>
          <input type="text" name="phoneno" v-model="phoneno">
        </form>
      </div>
    </div>
    <div class="btn-box">
      <button class="btn" @click="sendMsgToParent">确认上传</button>
    </div>
  </div>
</template>

<script>
    import store from '@/store'
    import { mapGetters } from 'vuex' // 引入Vuex数据
    export default {
        name: "Upload",
        data() {
          return{
            href: "../../../../static/download/batch_vouid.csv",
            pla: "模板下载后选择文件反显到这里"
          }
        },
        computed: {
          ...mapGetters([
            'phoneno',
          ])
        },
        methods: {
          upload() {
            this.$refs.file.click();
          },
          changefile(e) {
            this.pla = e.target.value;
          },
          sendMsgToParent() {
            var formData = new FormData(this.$refs.form);
            this.$emit("listenToChildEvent", formData);
          }
        }
    }
</script>

<style lang="stylus" scoped>
@import "~stylus/theme.styl"
.load-box
  display flex
  justify-content center
  margin-top 56px
  .load
    width 1060px
    height 88px
    display flex
    .up
      width 840px
      line-height  88px
      border-radius 14px 0 0 14px
      border 0.5px solid #984bfe
      outline none
      padding-left 30px
      cursor pointer
      .uptext
        color #2f2f2f
        font-size 18px
    .down
      width 185px
      text-align center
      flex 1
      line-height 88px
      border-radius 0 14px 14px 0
      background-color #984bfe
      border 0.5px solid #984bfe
      color #fff
      cursor pointer
      text-decoration none
      font-size 18px
.btn-box
  display flex
  justify-content center
  margin-top 50px
  .btn
    cursor pointer
    width 1060px
    height 88px
    background-color $themecolor
    color #fff
    font-size 20px
    border-radius 14px
    border none
    outline none
</style>
