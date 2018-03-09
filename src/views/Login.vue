<template>
<div class="login">
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="submitFrom" :loading="logining">登录</el-button>
    </el-form-item>
  </el-form>
  <s3-footer></s3-footer>
</div>
</template>

<script>

import store from '@/store/index.js'
import S3Footer from '@/components/S3Footer'

export default {
  name: 'login',
  data () {
    return {
      logining: false,
      ruleForm: {
        account: 'admin',
        checkPass: '123456'
      },
      rules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        checkPass: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      checked: true
    }
  },
  components: {S3Footer},
  methods: {
    submitFrom (ev) {
      var _this = this
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.logining = true
          var loginParams = {username: this.ruleForm.account, password: this.ruleForm.checkPass}
          s3.setURL('http://localhost:8080/mocks')
          s3.ajax('/user', {}, 's3core')
            .then(function (res) {
              if(res.data.status === '000'){
              // sessionStorage.setItem('user', JSON.stringify(user));
                s3.istore.setItemLocal('user','admin')
                _this.$router.push({ path: '/Index' })
                //store.commit('mutations')
                console.log(store.state.isLogedIn)
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
  .login{
    width:100%;height:100%;
    background-color:red;
    position:fixed;
    top:0;left:0;
    z-index:5;
  }
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 100px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
  }
</style>
