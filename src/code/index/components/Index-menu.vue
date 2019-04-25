<template>
    <div class="menu">
      <div class="btn-box">
        <img src="../../../assets/index/BatchActivationExchangeCode.png" height="22" width="18"/>
        <router-link to="/Index/Temload">批量激活兑换码</router-link>
      </div>
      <div class="btn-box">
        <img src="../../../assets/index/Theredemptioncodequeryhasbeenactivated.png" height="18" width="18"/>
        <router-link to="/Index/Actquery">已激活兑换码查询</router-link>
      </div>
    </div>
</template>

<script>
    import router from '@/router/index.js'
    export default {
        name: "Index-menu"
    }
</script>

<style lang="stylus" scoped>
  .menu
    background url(../../../assets/index/Navigationbarbackground.png) no-repeat
    background-size cover
    width 220px
    position absolute
    top 80px
    left 0px
    bottom 0px
    .btn-box
      width: 100%;
      height: 70px;
      display: flex;
      align-items:center;
      background: -webkit-linear-gradient(#ff65c5, #ca39a1); /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(#ff65c5, #ca39a1); /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(#ff65c5, #ca39a1); /* Firefox 3.6 - 15 */
      background: linear-gradient(#ff65c5, #ca39a1); /* 标准的语法 */
    .btn-box img
      position absolute
      left 20px
    .btn-box a
      color #ffffff
      font-size 16px
      position absolute
      left 49px
      text-decoration none
      cursor pointer
</style>
