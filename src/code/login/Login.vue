<template>
  <div class="main">
    <div class="login-box">
      <div class="logo-box">
        <img src="../../assets/login/logo.png" height="110" width="159"/>
      </div>
      <div class="phone-box">
        <img id="p-icon"
             :src="p_icon"
             height="20" width="14"
        />
        <input type="text" class="phone"
               placeholder="请输入注册蜗牛车车的手机号码"
               v-model="phoneno"
        />
      </div>
      <div class="sms_box">
        <img id="s-icon"
             :src="s_icon"
             height="20" width="14"
        />
        <input type="text" placeholder="请输入验证码" class="sms_code"
               v-model="sms_code"
        />
        <button
          :class="btns"
          @click="sendCode"
          :disabled="dis"
        >{{btmMsg}}<span v-if="showS"> S</span></button>
      </div>
      <button id="btn-login" @click="login">登&nbsp&nbsp&nbsp录</button>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    import router from '@/router/index.js'
    import store from '@/store'
    import { mapGetters } from 'vuex' // 引入Vuex数据
    export default {
        name: "login",
        data() {
          return {
            phoneno: '',
            sms_code: '',
            code: '',
            p_icon: require('../../assets/login/Cellphonenumber.png'),
            s_icon: require('../../assets/login/VerificationCode.png'),
            btmMsg: "发送验证码",
            showS: false,
            dis: false,
            btns: "btn1"
          }
        },
        methods: {
          sendCode() {
            // var url = 'http://t.weather.sojson.com/api/weather/city/101030100';
            var url = '/operplat/batch_act/sendSmsCode';
            axios.get(url,{
              params: {
                "phoneno":this.phoneno
              }
            })
              .then(res => {
                alert(res.data.retMsg);
                if (res.data.retCode == "success") {
                  this.runTime();
                }
              })
          },
          login() {
            var url = '/operplat/batch_act/checkSmsCode';
            axios.get(url,{
              params: {
                "phoneno":this.phoneno,
                "sms_code":this.sms_code
              }
            })
              .then(res => {
                this.code = res.data.code;
                store.dispatch('setPhoneno', this.phoneno); //vuex存入值
                store.dispatch('setCode', res.data.code);
              })
          },
          runTime() {
            this.btmMsg = 60;
            this.showS = true;
            this.btns = "btn2";
            this.dis = true;
            var time = setInterval(() =>{
              this.btmMsg--;
            },1000);
            setTimeout(() => {
              this.showS = false;
              this.btmMsg = "发送验证码";
              this.btns = "btn1";
              this.dis = false;
              clearInterval(time);
            },60000)
          }
        },
        watch: {
          phoneno: function (val) {
            if (val == "") {
              this.p_icon = require('../../assets/login/Cellphonenumber.png')
            }else {
              this.p_icon = require('../../assets/login/Mobilephonenumberdisplay.png')
            }
          },
          sms_code: function (val) {
            if (val == "") {
              this.s_icon = require('../../assets/login/VerificationCode.png')
            }else {
              this.s_icon = require('../../assets/login/Verificationcodedisplay.png')
            }
          },
          code: function (val) {
            if (val != "") {
              router.push('/Index')
            }
          }
        }
    }
</script>

<style lang="stylus" scoped>
@import "~stylus/theme.styl"
*
  box-sizing content-box
.main
  width 100%
  height 100%
  position absolute
  background url(../../assets/login/Background.png) no-repeat
  background-size 100%
  .login-box
    width 540px
    height 550px
    background-color #ffffff
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
      margin-top 60px
    .phone-box
      display flex
      justify-content center
      margin-top 50px
      #p-icon
        position absolute
        left 78px
        top 241px
      .phone
        width 380px
        height 60px
        border 1px solid #e3e3e3
        outline none
        border-radius 6px
        font-size 18px
        padding-left 40px
        color #2f2f2f
      .phone:-webkit-autofill
        box-shadow 0 0 0px 1000px #ffffff inset !important
      .phone::-webkit-input-placeholder  /* Chrome/Opera/Safari */
        color #bebebe
        font-size 18px
      .phone::-moz-placeholder /* Firefox 19+ */
        color #bebebe
        font-size 18px
      .phone:-ms-input-placeholder /* IE 10+ */
        color #bebebe
        font-size 18px
      .phone:-moz-placeholder /* Firefox 18- */
        color #bebebe
        font-size 18px
    .sms_box
      width 420px
      height 60px
      margin 30px auto 0
      #s-icon
        position absolute
        left 78px
        top 332px
      .sms_code
        width 230px
        height 60px
        border 1px solid #e3e3e3
        outline none
        border-radius 6px
        font-size 18px
        padding-left 40px
        color #2f2f2f
      .sms_code:-webkit-autofill
        box-shadow 0 0 0px 1000px #ffffff inset !important
      .sms_code::-webkit-input-placeholder /* Chrome/Opera/Safari */
        color #bebebe
        font-size 18px
      .sms_code::-moz-placeholder /* Firefox 19+ */
        color #bebebe
        font-size 18px
      .sms_code:-ms-input-placeholder /* IE 10+ */
        color  #bebebe
        font-size 18px
      .sms_code:-moz-placeholder /* Firefox 18- */
        color #bebebe
        font-size 18px
      .btn1
        outline none
        border none
        border-radius 6px
        width 130px
        height 60px
        float right
        color #ffffff
        font-size 18px
        background-color $themecolor
      .btn2
        outline none
        border none
        border-radius 6px
        width 130px
        height 60px
        float right
        color #ffffff
        font-size 18px
        background-color #dbdbdb
    #btn-login
      outline none
      border none
      border-radius 30px
      width 420px
      height 60px
      color #ffffff
      font-size 18px
      background-color $themecolor
      display block
      margin 50px auto 0
</style>
