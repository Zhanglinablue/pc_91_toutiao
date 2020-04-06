<template>
  <div class="container">
    <van-nav-bar title="登录" left-arrow @click-left="$router.back()"></van-nav-bar>
 <van-cell-group>
  <van-field
  required
  v-model="loginForm.mobile"
  :error-message="errMsg.mobile"
  @blur="checkmobile"
  placeholder="请输入手机号"  label="手机号"></van-field>
  <van-field
  required
  v-model="loginForm.code"
  :error-message="errMsg.code"
  @blur="checkcode"
  placeholder="请输入验证码"  label="验证码">
    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
  </van-field>
</van-cell-group>
<div class="btn-box">
  <van-button type="info" round @click="checklogin"  size="small" block>登录</van-button>
</div>

  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        mobile: '13911111111',
        code: '2468110'
      },
      errMsg: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    checkmobile () {
      if (!this.loginForm.mobile.trim()) {
        this.errMsg.mobile = '请输入手机号'
        return false
      }
      if (!/^1[3-9]\d{9}$/.test(this.loginForm.mobile)) {
        this.errMsg.mobile = '请输入正确格式'
        return false
      }
      this.errMsg.mobile = ''
      return true
    },
    checkcode () {
      if (!this.loginForm.code.trim()) {
        this.errMsg.code = '请输入验证码'
        return false
      }
      if (!/^\d{6}$/.test(this.loginForm.code)) {
        this.errMsg.code = '请输入正确格式'
        return false
      }
      this.errMsg.mobile = ''
      return true
    },
    checklogin () {
      if (this.checkmobile() && this.checkcode()) {
        // this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.btn-box{
  width: 80%;
  margin: 10px auto;
}
</style>
