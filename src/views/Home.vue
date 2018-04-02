<template>
  <div>
    <s3-header :company="company" :logo="logo"></s3-header>
    <s3-nav :nav="nav"></s3-nav>
        <s3-navv></s3-navv>
    <router-view class="view"></router-view>
    <s3-footer :company="company" :logo="logo" class="footer"></s3-footer>
  </div>
</template>

<script>
import s3Navv from '@/components/s3-navv'
import s3Nav from '@/components/s3-nav'
import s3Header from '@/components/s3-header'
import s3Footer from '@/components/s3-footer'

export default {

  name: 'Home',
  data () {
    return {
      nav:[],
      company: config.basic.companyName,
      logo: config.basic.logo
    }
  },
  components:{
    s3Navv,
    s3Nav,
    s3Header,
    s3Footer
  },
  created(){
    //获取导航数据
    s3.ajax('/nav',{},'config')
      .then(res =>{
        this.nav = res.roleList;
    })
  }


}
</script>

<style>
  .view{min-height: 500px}
  .el-carousel{width:100%;height:300px;}
  .el-carousel__item h3 {
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
