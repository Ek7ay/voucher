<template>
    <div class="header">
      <img class="logo" src="../../../assets/index/Thesnailcarlogo.png" height="32" width="182"/>
      <img class="pero" src="../../../assets/index/Headportrait.png" height="50" width="50"/>
      <span class="tel">{{phoneno}}</span>
      <img
           class="out2"
           src="../../../assets/index/retreatfrom.png"
           height="20" width="19"
           @click="exit"
      />
      <span
           class="out"
           id="out"
           @click="exit"
      >退出</span>
    </div>
</template>

<script>
    import router from '@/router/index.js'
    import store from '@/store'
    import { mapGetters } from 'vuex' // 引入Vuex数据
    export default {
        name: "index-header",
      // 打散数据，取出vuex数据
        computed: {
          ...mapGetters([
            'phoneno'
          ])
        },
        methods: {
          exit () {
            router.push('/')
          }
        }
    }
</script>

<style lang="stylus" scoped>
.header
  width 100%
  height 80px
  background url(../../../assets/index/tabColumnbackground.png) no-repeat
  background-size cover
  display flex
  align-items center
  .logo
    margin-left 20px
  .pero
    position absolute
    right 296px
  .tel
    position absolute
    right 168px
    font-size 18px
    color #ffffff
  .out2
    position absolute
    right 100px
    cursor pointer
  .out
    position absolute
    right 50px
    cursor pointer
    font-size 18px
    color #fff
</style>
