<template>
<div>
  <el-container>
    <el-footer>copyright@2017<img class="logo" src="../assets/logo.png" alt="" width="80" height="30"></el-footer>
  </el-container>
</div>
</template>

<script>
export default {
    name: "s3-footer"
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
