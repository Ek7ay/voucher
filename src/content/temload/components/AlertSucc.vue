<template>
    <div class="main">
      <div class="succ">
        <div class="logo-box">
          <img src="../../../assets/query/Pop-updisplay.png" alt="">
        </div>
        <div class="text-box">
          兑换码:
          <span class="col">{{Msgs}}</span>个
          <span>&nbsp;</span>
          <span>价值:</span>
          <span class="col">{{Msgss}}</span>蜗牛豆
        </div>
        <div class="text-box2">
          确认上传吗？
        </div>
        <div class="btn-box">
          <button
            class="btnn bt1"
            @click="sendMsgToParent"
          >取消</button>
          <button
            class="btnn bt2"
            @click="sendMsgToParent2"
          >确认</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AlertSucc",
        props: ['Msgs','Msgss'],
        data() {
          return {
            // count: 458,
            // amt: 2437947
          }
        },
        methods: {
          sendMsgToParent() {
            this.$emit("listenToChildEvent")
          },
          sendMsgToParent2() {
            this.$emit("listenToChildEvent2")
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
  .succ
    width 570px
    height 332px
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
      margin-top 44px
    .text-box
      font-size 20px
      color #2f2f2f
      width 345px
      margin 34px auto 0
      .col
        color $themecolor
    .text-box2
      display flex
      justify-content center
      color #2f2f2f
      margin-top 8px
    .btn-box
      position absolute
      bottom 40px
      .btnn
        width 180px
        height 50px
        border-radius 10px
        margin-left 70px
        color #ffffff
        font-size 20px
        outline none
        border none
      .bt1
        background-color #cbcbcb
      .bt2
        background-color $themecolor
</style>
