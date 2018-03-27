<template>
<div>
  <el-container>
    <el-footer>{{company}}copyright@{{fullyear}}<img class="logo" :src="images" alt="" width="80" height="30"></el-footer>
  </el-container>
</div>
</template>

<script>
export default {
    name: "s3-footer",
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
  created(){
    this.fullyear = new Date().getFullYear();
  }
}
</script>

<style scoped>
  .el-footer {
    font-size: 12px;
    background-color: #303030;
    color: #fff;
    text-align: center;
    height: 80px!important;
    line-height: 80px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left:0;
  }
  .logo{
    vertical-align: middle;
    padding-left: 10px;
  }
</style>
