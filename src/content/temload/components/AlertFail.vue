<template>
    <div class="main">
      <div class="fail">
        <div class="logo-box">
          <img src="../../../assets/query/Pop-updisplay.png" alt="">
        </div>
        <div class="text-box">
          兑换码文件上传失败，失败原因如下：
        </div>
        <div class="btn-box">
          <button class="btn" @click="sendMsgToParent">确认</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AlertFail",
        methods: {
          sendMsgToParent() {
            this.$emit("listenToChildEvent")
          }
        }
    }
</script>

<style lang="stylus" scoped>
  @import "~stylus/theme.styl"
  .main
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background rgba(0,0,0,.6)
    z-index 10
    .fail
      width 540px
      height 298px
      border-radius 20px
      background-color #ffffff
      font-size 20px
      position absolute
      top 50%
      left 50%
      -webkit-transform translate(-50%, -50%)
      -moz-transform translate(-50%, -50%)
      -ms-transform translate(-50%, -50%)
      -o-transform translate(-50%, -50%)
      transform translate(-50%, -50%)
      .logo-box
        display flex
        justify-content center
        margin-top 40px
      .text-box
        text-align center
        margin-top 30px
      .btn-box
        text-align center
        margin-top 35px
        .btn
          width 380px
          height 50px
          border-radius 10px
          background-color $themecolor
          color #ffffff
          font-size 20px
          outline none
          border none
          cursor pointer
</style>
