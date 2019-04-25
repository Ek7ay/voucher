<template>
    <div class="main">
      <div class="date-box">
        <span class="lab">激活日期：</span>
        <DatePicker
          class="date" type="date"
          size="large" style="width: 260px"
          v-model="sdate"
        ></DatePicker>
        <span class="lab">——</span>
        <DatePicker
          class="date" type="date"
          size="large" style="width: 260px"
          v-model="edate"
        ></DatePicker>
        <button
          class="search"
          @click="search"
        >搜索</button>
      </div>
    </div>
</template>

<script>
    import store from '@/store'
    import { mapGetters } from 'vuex'
    export default {
        name: "Header",
        data() {
            return {
            sdate: "",
            edate: ""
          }
        },
        watch: {
          sdate: function (val) {
            this.$store.dispatch('setSdate', val); //vuex存入值
          },
          edate: function (val) {
            this.$store.dispatch('setEdate', val); //vuex存入值
          }
        },
        methods: {
          search() {
            this.$emit("listenHeader");
          }
        }
    }
</script>

<style lang="stylus" scoped>
@import "~stylus/theme.styl"
.main
  display flex
  justify-content center
  margin-top 56px
  .date-box
    width 992px
    min-width 992px
    height 65px
    .lab
      font-size 18px
      color #313131
      line-height 64px
      position relative
      top 3px
    .date
      margin 0 30px
    .search
      width 195px
      height 64px
      background-color $themecolor
      color #fff
      border-radius 10px
      outline none
      font-size 18px
      position relative
      top 1px
</style>
<style lang="stylus">
  .date .ivu-input-large
    height 64px
  .date .ivu-input-wrapper-large .ivu-input-icon
    line-height 64px
    height 64px
</style>

