<template>
  <div>
    <S3-header></S3-header>
    <S3-nav></S3-nav>
    <S3-footer></S3-footer>
  </div>
</template>

<script>

import S3Nav from '@/components/S3Nav'
import S3Header from '@/components/S3Header'
import S3Footer from '@/components/S3Footer'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components:{
    S3Nav,
    S3Header,
    S3Footer}
}
</script>

<style>
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
