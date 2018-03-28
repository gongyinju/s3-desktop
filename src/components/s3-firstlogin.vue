<template>
	<div class="firstLogin">
		<p class="title">首次登录</p>

		<el-form label-position="left" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			
			<el-form-item label="手机号" prop="phone">
	        <el-input placeholder="请输入手机号" v-model.number="ruleForm.phone"></el-input>
	    </el-form-item>

	    <el-form-item label="验证码" prop="validatecode">
	        <el-input placeholder="请输入验证码" v-model.number="ruleForm.validatecode"></el-input>
	    </el-form-item>
			
			<el-form-item label="旧密码" prop="oldPassword">
		    <el-input type="password" v-model="ruleForm.oldPassword" auto-complete="off"></el-input>
		  </el-form-item>

			<el-form-item label="新密码" prop="newPassword">
		    <el-input type="password" v-model="ruleForm.newPassword" auto-complete="off"></el-input>
		  </el-form-item>

		  <el-form-item label="确认密码" prop="repeatPassword">
		    <el-input type="password" v-model="ruleForm.repeatPassword" auto-complete="off"></el-input>
		  </el-form-item>

		  <el-form-item>
		    <el-button class="btn" type="primary" @click="submitForm('ruleForm')">提交</el-button>
		  </el-form-item>

		</el-form>
	</div>
</template>

<script>

  export default {
    props:{
      success: {
        type: String,
        default: '/home'
      }
    },
    data() {

    	//验证新密码
      var validateNewPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.repeatPassword !== '') {
            this.$refs.ruleForm.validateField('repeatPassword');
          }
          callback();
        }
      };

      var validateCheckPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.newPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

      //验证手机号
      var checkPhone = (rule, value, callback) => {
      	var val = value+"";
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }
        if (!Number.isInteger(value)) {
          return callback(new Error('请输入数字值'));
        }  
        if (val.length !==11){
        	return callback(new Error('手机号位数不正确'));
        }
        else {
          callback();
        }
      };

      return {
        ruleForm: {
        	phone: '',
        	validatecode: null,
        	oldPassword: '',
          newPassword: '',
          repeatPassword: ''
        },
        rules: {
        	phone: [
        	 	{ required: true, validator: checkPhone, trigger: 'blur' }
          ],
          validatecode: [
        	 	{ required: true, message: '请输入验证码', trigger: 'blur' }
          ],
          oldPassword: [
          	{ required: true, message: '请输入旧密码', trigger: 'blur' }
          ],
          newPassword: [
            { required: true, validator: validateNewPass, trigger: 'blur' },
            { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
          ],
          repeatPassword: [
            { required: true, validator: validateCheckPass, trigger: 'blur' }
          ]
        }
      };
    },

    computed: {
      user () {
        return this.$store.state.currentUser || {UserEntityloginName:''}
      },
      appid () {
        return this.$store.state.appid
      }
    },

    methods: {

    	submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log("ok");
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      changePassword: function(event){
        // console.log(this.user)
        // console.log(this.$refs.formvalcode.phone)
        // console.log(this.$refs.formvalcode.validatecode)

        this.$store.commit('userFirstLogin',false)
        this.$store.commit('userLogin')
        this.$store.dispatch('getUserState')
        this.$router.push(this.success)
      }
    }
  }
</script>

<style>
	.firstLogin{width:500px;height:430px;background-color:#fff;border:1px solid #000;position:fixed;left:50%;margin-left:-250px;top:10%;}
	.title{width:100%;padding:15px 10px;margin-bottom:10px;}
	.demo-ruleForm{width:80%;margin:0 auto;}
	.btn{width:200px;}
</style>