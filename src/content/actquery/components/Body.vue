<template>
    <div class="main">
      <div class="table-box">
        <table>
          <tr class="thead">
            <th class="tf">批次号</th>
            <th>上传时间</th>
            <th>上传条数</th>
            <th>总金额</th>
            <th>已成功条数</th>
            <th class="tl">以失败条数</th>
          </tr>
          <tr
            class="tbody"
            v-for="(item,index) in batchs"
          >
            <td>
              <router-link :to="{path: '/Index/Detail', query: { name: item.batch_no}}">
                {{item.batch_no}}
              </router-link>
            </td>

            <td>{{item.ctime}}</td>
            <td>{{item.totalCount}}</td>
            <td>{{item.totalAmt}}</td>
            <td>{{item.totalSuccCount}}</td>
            <td>{{item.totalFailCount}}</td>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>
    // import store from '@/store'
    import { mapGetters } from 'vuex'
    export default {
        name: "Body",
      // 打散数据，取出vuex数据
        computed: {
          ...mapGetters([
            'batchs'
          ])
        },
    }
</script>

<style lang="stylus" scoped>
@import "~stylus/theme.styl"
.main
  display flex
  justify-content center
  margin-top 50px
  .table-box
    width 1056px
  .table-box table
    width 100%
    text-align center
    border-collapse collapse
    white-space nowrap
    .thead
      line-height 70px
      font-size 18px
      background-color $themecolor
      color #fff
      .tf
        border-top-left-radius 14px
      .tl
        border-top-right-radius 14px
    .tbody
      line-height 70px
      font-size 18px
    .tbody td
      border: 1px solid #E3E3E3;
</style>
