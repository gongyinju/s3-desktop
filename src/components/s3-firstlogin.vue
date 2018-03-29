<template>
	<div class="firstLogin">
		<p class="title">首次登录</p>

		<el-form label-position="left" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			
			<el-form-item label="手机号" prop="phone">
	        <el-input placeholder="请输入手机号" v-model.number="ruleForm.phone"></el-input>
	    </el-form-item>

	    <el-form-item label="验证码" prop="validatecode">
	        <el-input style="width:190px;margin-right: 13px;" placeholder="请输入验证码" v-model.number="ruleForm.validatecode"></el-input>
	        <el-button style="padding: 12px 10px;" type="primary">获取验证码</el-button>
	    </el-form-item>
			
			<el-form-item label="旧密码" prop="oldPassword">
		    <el-input placeholder="请输入原密码" type="password" v-model="ruleForm.oldPassword" auto-complete="off"></el-input>
		  </el-form-item>

			<el-form-item label="新密码" prop="newPassword">
		    <el-input placeholder="请输入新密码" type="password" v-model="ruleForm.newPassword" auto-complete="off"></el-input>
		  </el-form-item>

		  <el-form-item label="确认密码" prop="repeatPassword">
		    <el-input placeholder="确认新密码" type="password" v-model="ruleForm.repeatPassword" auto-complete="off"></el-input>
		  </el-form-item>

		  <el-form-item>
		    <el-button class="btn" type="primary" @click="submitForm('ruleForm')">提交</el-button>
		  </el-form-item>

		</el-form>
		<div class="tip">
			<p>温馨提示：</p>
			<p>请将密码设置为8（含）位以上，必须包含数字、大写字母、小写字母、特殊字符这四种类型中的两种</p>
			<p>为了保护您的账户的安全请不要将密码设置为其他网站相同的密码；</p>
			<p>建议您每隔一段时间修改您的密码，以防密码泄露。</p>
		</div>
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

      //二次验证新密码
      var validateCheckPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.newPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
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
        	 	{ required: true, message: '请输入验证码', trigger: 'blur' },
        	 	{ type: 'number', message: '验证码必须为数字值'}
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
            this.$store.commit('userFirstLogin',false)
		        this.$store.commit('userLogin')
		        this.$store.dispatch('getUserState')
		        this.$router.push(this.success)
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

<style>
	.firstLogin{width:500px;background-color:#fff;position:fixed;left:50%;margin-left:-250px;top:8%;border-radius: 5px;}
	.title{width:100%;padding:15px 15px;margin-bottom:10px;}
	.demo-ruleForm{width:80%;margin:0 auto;}
	.btn{width:200px;}
	.tip{font-size:12px;padding:15px;margin-top:-10px;}
</style>