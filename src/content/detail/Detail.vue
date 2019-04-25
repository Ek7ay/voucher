<template>
    <div class="main">
      <div class="turn">
          <router-link to="/Index/Actquery">《 已激活兑换码明细</router-link>
      </div>
      <div class="header">
          <div class="querybox">
            <span class="spa">批次号：</span>
            <input
              type="text"
              class="inp"
              v-model="batch_no"
            >
            <span class="spa">激活状态：</span>
            <select
              class="inp"
              v-model="status"
            >
              <option value="">全部</option>
              <option value="init">未处理</option>
              <option value="succ">成功</option>
              <option value="fail">失败</option>
            </select>
            <button class="search" @click="search">查询</button>
          </div>
      </div>
      <div class="table-box">
        <table>
          <tr class="thead">
            <th class="tl">兑换码</th>
            <th>面额</th>
            <th>激活状态</th>
            <th>激活时间</th>
            <th class="tr">失败原因</th>
          </tr>
          <tr
            class="tbody"
            v-for="(item,index) in vous"
          >
            <td>{{item.vouid}}</td>
            <td>{{item.vouden}}</td>
            <td>{{panduan(item.status)}}</td>
            <td>{{item.ctime}}</td>
            <td>{{item.remark}}</td>
          </tr>
        </table>
      </div>
      <div class="page">
        <Page
          :total="count"
          :current="page_num"
          :page-size="page_count"
          show-elevator
          show-sizer
          :page-size-opts="opts"
          @on-change="changePage"
          @on-page-size-change='changePageSize'
          show-total
        />
      </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import store from '@/store'
    import { mapGetters } from 'vuex' // 引入Vuex数据
    export default {
        name: "Detail",
        data () {
          return{
            batch_no: "",
            status: "",
            vous: "",
            count: 0,
            page_num: 1,
            page_count: 5,
            opts: [2, 5, 10, 20, 30]
          }
        },
        // 打散数据，取出vuex数据
        computed: {
          ...mapGetters([
            'phoneno',
            'code'
          ])
        },
        created() {
          this.batch_no = this.$route.query.name;
        },
        mounted() {
          this.query();
        },
        methods: {
          query() {
            var url = '/operplat/batch_act/vousQuery/' + this.code;
            axios.get(url,{
              params: {
                "phoneno": this.phoneno,
                "batch_no": this.batch_no,
                "status": this.status,
                "page_num": this.page_num,
                "page_count": this.page_count
              }
            })
              .then(res => {
                this.vous = res.data.vous;
                this.count = res.data.count;
                console.log(res);
              })
          },
          panduan(data) {
            switch (data) {
              case 'init':
                return '未处理';
                break;
              case 'succ':
                return '成功';
                break;
              case 'fail':
                return '失败';
                break;
            }
          },
          search() {
            this.query();
          },
          changePage(data) {
            this.page_num = data;
            this.query();
          },
          changePageSize(data) {
            this.page_count = data;
            this.query();
          }
        }
    }
</script>

<style lang="stylus" scoped>
@import "~stylus/theme.styl"
.main
  background-color #fff
  .turn
    font-size 18px
    margin-left 90px
    line-height 100px
  .turn a
    color  $themecolor
  .header
    display flex
    justify-content center
    .querybox
      width 992px
      min-width 992px
      .spa
        font-size 18px
        color #2f2f2f
        margin-right 30px
      .inp
        width 260px
        height 64px
        border-radius 10px
        font-size 18px
        color #787878
        outline none
        margin-right 50px
      .search
        width 136px
        height 64px
        background-color $themecolor
        color #fff
        border-radius 10px
        outline none
        font-size 18px
        position relative
        bottom 2px
        cursor pointer
  .table-box
    display flex
    justify-content center
    margin-top 40px
    position absolute
    top 164px
    bottom 94px
    left 0
    right 0
    overflow-y auto
  .table-box table
    width 1056px
    border-collapse collapse
    .thead
      line-height 70px
      font-size 18px
      background-color $themecolor
      color #fff
      .tl
        border-top-left-radius 14px
      .tr
        border-top-right-radius 14px
    .tbody
      line-height 64px
      font-size 16px
      text-align center
    .tbody td
      border 1px solid #E3E3E3
  .page
    width 100%
    display flex
    justify-content center
    position absolute
    bottom 25px
</style>
