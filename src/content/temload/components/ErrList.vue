<template>
    <div class="main">
      <div class="box">
        <div class="head">
          <span>失败原因如下：</span>
        </div>
      </div>
      <div class="body-box">
        <div class="body" v-for="(item,index) in Msg">
          <span class="left">{{item.msg}}</span>
          <span class="right">{{item.vouid}}</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ErrList",
        props: ['Msg']
    }
</script>

<style lang="stylus" scoped>
.main
  margin-top 50px
  .box
    display flex
    justify-content center
    .head
      width 1056px
      line-height  70px
      background-color #fcb2e1
      border-radius 14px 14px 0 0
    .head span
      margin-left 30px
      font-size 18px
      color #e630a4
  .body-box
    width 1056px
    line-height 70px
    font-size 16px
    color #787878
    background-color #e4e3e3
    margin 0 auto
    .body
      display flex
      justify-content space-between
      .left
        margin-left 30px
      .right
        margin-right 30px
</style>
