<template>
  <div class="main">

    <p class="loginTitle">
      你好！欢迎来到<span>{{company}}</span>
    </p>

    <img class="loginPic" :src="loginPic" >
    <s3-login v-show="show" 
      :logo="logo" 
      :success="success"
      :company="company"
       @hide="boolean">
    </s3-login>
    <s3-firstlogin :success="success" v-if="showFirstLogin"></s3-firstlogin>
    <s3-footer></s3-footer>
  </div>
</template>

<script>
  
import s3Login from '@/components/s3-login'
import s3Firstlogin from '@/components/s3-firstlogin'
import s3Footer from '@/components/s3-footer'

export default {
  data () {
    return {
      success: '/Index',
      show: true,
      company: config.basic.companyName,
      logo: config.basic.logo,
      loginPic: config.basic.loginPic
    }
  },
  methods: {
    boolean: function(data){
      this.show = data
    }
  },
  computed: {
    showFirstLogin: {
      get: function(){
        return this.$store.state.isFirstLogedIn
      },
      set: function(){
        this.$store.commit('userFirstLogin',this.showFirstLogin)
      }
    }
  },
  components: {
    s3Login,
    s3Firstlogin,
    s3Footer
  },
  mounted () {
    this.$store.commit('userLogout')
  }
}


</script>

<style scoped>
  .loginTitle{position: absolute;top:10px;left:100px;font-size: 12px;color:#fff;}
  .loginPic{width:100%;height:843px;margin-bottom:-5px;}
</style>