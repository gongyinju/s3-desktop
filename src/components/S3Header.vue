<template>
    <div class="head">
      <div class="head_main">
        <div class="head_main_logo">
          <img src="../assets/logo.png" alt="">
          <span>上游测试环境</span>
        </div>
        <div class="head_main_info">
          <span>你好，XXX，您当前的角色是管理员！</span>
          <span class="mar_l20">角色切换：</span>
          <el-select style="width:100px;" size="mini" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span class="mar_l10"><i style="left:-5px" class="iconfont icon-yonghuming"></i>用户信息</span>
          <span class="mar_l10"><i style="left:-5px;top:2px;" class="iconfont icon-xiugaimima2"></i>修改密码</span>
          <span class="mar_l10"><i style="left:-5px;top:1px;" class="iconfont icon-tuichu"></i>退出</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
data() {
  return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
        value: ''
    }
  }
}
</script>

<style scoped>
  .head{width:100%;height:60px;line-height: 60px;background-color:#f1f1f1;}
  .head_main{width:1250px;margin:0 auto;overflow: hidden;}
  .head_main_logo{float: left;}
  .head_main_logo img{width:80px;height:30px;vertical-align: middle;}
  .head_main_logo span{height:60px;line-height: 60px;font-size:16px;margin-left: 10px;vertical-align: middle;color: #0d1c33;}
  .head_main_info{float: right;font-size:12px;}
  .iconfont{position:relative;}
  .el-input>.el-input__inner{height:30px !important;width:90px !important;color:red;}
</style>
