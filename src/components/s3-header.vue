<template>
    <el-header class="head">
      <div class="head_main">
        <div class="head_main_logo">
          <img :src="logo" alt="">
          <span>{{company}}</span>
        </div>
        <div class="head_main_info">
          当前角色
<!--           <el-select style="width:100px;margin-right:10px;" size="mini" v-model="value" placeholder="请选择">
            <el-option v-for="item in roles" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select> -->
          <s3-userinfo></s3-userinfo>
        </div>
      </div>
    </el-header>
</template>

<script>
import s3Userinfo from '@/components/s3-userinfo'
export default {
  props:{
    roles: {
      type: Array,
      required: true
    },
    company: {
      type: String,
      default:'核心企业电子供应链平台'
    },
    logo:{
      type: String,
      default:'http://file.gongyinju.com/group1/M00/00/5B/bQYdm1mH6MCARxkxAABfhUPd7bM324.jpg'
    }
  },
  methods: {
    changeRole () {
      //切换角色dosomething
      //很复杂，直接emit 在外面处理好了
    }
  },
  components: {
    s3Userinfo
  }
}
</script>

<style scoped>
  .head{line-height: 60px;}
  .head_main_logo{float: left;}
  .head_main_logo img{width:80px;height:30px;vertical-align: middle;}
  .head_main_logo span{height:60px;line-height: 60px;font-size:16px;margin-left: 10px;vertical-align: middle;color: #0d1c33;}
  .head_main_info{float: right;font-size:12px;}
  .iconfont{position:relative;}
  .el-input>.el-input__inner{height:30px !important;width:90px !important;color:red;}
  .text-black{color:#000;}
</style>
