<template>
  <div class="main">
    <div class="loginTitle">
      <p>用户登录</p>
    </div>
    <div class="login">
      <el-form label-position="left" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="用户名" prop="name">
          <el-input placeholder="请输入用户名" v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input placeholder="请输入密码" v-model="ruleForm.password"></el-input>
        </el-form-item>
              
        <div class="handle">
          <el-checkbox v-model="checked">记住用户名</el-checkbox>
          <span class="resetPassword">忘记密码</span>
        </div>

        <div class="btn">
          <el-button class="submit" type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button class="reset" @click="resetForm('ruleForm')">重置</el-button>
        </div>

      </el-form>
    </div>
  </div>
</template>

<script>

import store from '@/store'
  export default {
    props:{
      success: {
        type: String,
        default: '/home'
      },
      loginPic: {
        type: String,
      }
    },
    data() {
      return {
        ruleForm: {
          name: '',
          password: '',
        },
        checked: false,
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    computed: {
      appid () {
        return this.$store.state.appid
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
        if (valid) {

          let self = this;
          var getPublicKey = function() {
            return new Promise((resolve,reject) => {
              let param = {
                appid: self.appid
              }
              s3.ajax('/publicKey',param,'usermanage').then(result => {
                if(result.retCode == '200') {
                  resolve(result) 
                } else {
                  reject(result)
                }
              })
            })
          };
          getPublicKey()
            .then(data => {
              console.log(data)
              let pwd = s3.RSAEncrypt(data.modulus,data.exponent,self.ruleForm.password);
              let param = {
                loginName: self.ruleForm.name,
                password: pwd,
                appid: self.appid
              }
              return s3.ajax('/login',param,'usermanage')
            })
            .then(result => {
              console.log(result);
              if (result.retCode === '200'){
                let firstLoginFlag = true;
                if (result.isFirstLogin === 'true') {
                  firstLoginFlag = true;
                  self.$store.commit('userFirstLogin',firstLoginFlag)
                } else {
                  self.$store.commit('userLogin')
                  self.$store.dispatch('getUserState')
                  self.$router.push(self.success)
                }
                this.$emit('hide',false);
              } else {
                MessageBox('提示', result.retMsg ||result.retmsg )
              }
            })
            .catch(error => {
              throw new Error(error)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .main{width:400px;position: fixed;top:17%;right:11%;background-color:#fff;overflow: hidden;border-radius: 5px}
  .login{padding:0 30px 30px 30px;}
  .loginTitle{width:100%;line-height:60px;margin-bottom:10px;}
  .loginTitle>p{padding-left:30px;}
  .btn{width:280px;margin:0 auto;overflow: hidden;margin-top:40px;}
  .btn button{width:100px;}
  .submit{float: left;}
  .reset{float: right;}
  .resetPassword{float: right;font-size: 14px;color:#1c9fe1;cursor: pointer;}
  .handle{width:100%;overflow: hidden;}
</style>