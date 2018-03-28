<template>
  <div>
    <s3-login></s3-login>
    <s3-footer></s3-footer>
  </div>
</template>

<script>
  
import s3Login from '@/components/s3-login'
import s3Footer from '@/components/s3-footer'

export default {
  data () {
    return {
      success: '/'
      // company: '工银聚',
      // logo: 'http://img.hb.aicdn.com/b4e756dff556ef08277874acd970c6a14219290b3285e-5yoSex_fw658'
    }
  },
  components: {
    s3Login,
    s3Footer
  }
}

</script>

<style>
  
</style>