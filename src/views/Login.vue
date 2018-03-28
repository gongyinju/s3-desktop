<template>
  <div>
    <s3-login :success="success"></s3-login>
    <s3-firstlogin v-if="showFirstLogin"></s3-firstlogin>
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
      success: '/'
      // company: '工银聚',
      // logo: 'http://img.hb.aicdn.com/b4e756dff556ef08277874acd970c6a14219290b3285e-5yoSex_fw658'
      //console.log(showFirstLogin);
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

<style>
  
</style>