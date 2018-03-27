<template>
  <div class="login">
    <p class="logo-title">您好！欢迎来到{{company}}</p>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  label-width="0" class="demo-ruleForm login-container">
      <h3 class="title">用户登录</h3>
      <div style=" padding: 35px 35px 15px 35px;">
        <el-form-item prop="account" >
          <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
              <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content" style="text-align: right;font-size: 14px;">
              <router-link to="/findPassword">忘记密码？</router-link>
            </div>
          </el-col>
        </el-row>
        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%;" @click.native.prevent="submitFrom" :loading="logining">登录</el-button>
        </el-form-item>
      </div>
    </el-form>
    <s3-footer></s3-footer>
  </div>
</template>

<script>

import {mapActions} from 'vuex'
import store from '@/store'
import s3Footer from '@/components/s3-footer'

export default {
  name: 'login',
  components: {s3Footer},
  props:{
    company: {
      type: String,
      default:'某某集团'
    },
    images:{
      type: String,
      default:'http://img.hb.aicdn.com/b4e756dff556ef08277874acd970c6a14219290b3285e-5yoSex_fw658'
    }
  },
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
  methods: {
    submitFrom: function (ev) {
      console.log(this)
      var that = this
      that.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.logining = true
          var loginParams = {username: this.ruleForm.account, password: this.ruleForm.checkPass}
          s3.ajax('/login', loginParams, 'usermanage').then((res) => {
            console.log(res)
            if(res.retCode === '200') {
               that.$router.push('/Home')
            }
          })
        } else {
          return false
        }
      })
    }
    // forgetPassword: function ( ){
    //   var that = this;
    //   that.$router.push('/findPassword')
    // }
  }
}
</script>

<style scoped>
  .login{
    width:100%;
    height:100%;
    background-color:red;
    position:fixed;
    top:0;left:0;
  }
  .logo-title{
    margin-left: 70px;
    margin-top:10px;
    color:#fff;
    font-size: 14px;
  }
  .login-container {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    background-clip: padding-box;
    margin: 60px auto;
    width: 480px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .title {
    margin: 0 auto;
    padding:15px 35px;
    text-align: left;
    border-bottom:2px solid #66b1ff;
    color: #505458;
    background-color:#f0f0f0 ;
  }
  .remember {
    margin: 0 0 35px 0;
  }

</style>
