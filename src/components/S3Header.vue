<template>
    <div class="head">
      <div class="head_main">
        <div class="head_main_logo">
          <img :src="images" alt="">
          <span>{{company}}</span>
        </div>
        <div class="head_main_info">
          <span>你好，<span class="skin-color">某某某下游经销商</span>，您当前的角色是<span class="skin-color" style="padding-left: 5px;">{{this.value}}</span>！</span>
          <span class="mar_l20">角色切换：</span>
          <el-select style="width:100px;" size="mini" v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
          <el-button type="text" class="text-black"><i style="left:-5px" class="iconfont icon-yonghuming"></i>用户信息</el-button>
          <el-button type="text" class="text-black"><i style="left:-5px;top:2px;" class="iconfont icon-xiugaimima2"></i>修改密码</el-button>
          <el-button type="text" class="text-black" @click.native.prevent="logout"><i style="left:-5px;top:1px;" class="iconfont icon-tuichu"></i>退出</el-button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
data() {
  return {
      options: [{
        value: '经销商',
        label: '经销商'
      }, {
        value: '财务',
        label: '财务'
      }, {
        value: '选项3',
        label: '中后卫'
      }, {
        value: '前锋',
        label: '前锋'
      }],
     value: '经销商'//默认角色
    }
  },
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
  methods:{
    logout: function () {  //退出
      var that = this;
      s3.istore.remove('user')
      that.$router.push('/')
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
