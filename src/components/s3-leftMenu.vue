<template>
  <div>
    <el-col :span="4">
      <el-menu default-active="1" class="el-menu-vertical-demo">
        <li v-for="(item,i) in navList">
          <router-link :to="item.menuUrl">
            <el-menu-item :index="String(i+1)">
              <i class="el-icon-menu"></i>
              <span slot="title">{{item.menuName}}</span>
            </el-menu-item>
          </router-link>
        </li>
      </el-menu>
    </el-col>
  </div>
</template>


<script>
  export default {
    props:['leftNav'],
    data(){
      return{
        navList:[]
      }
    },
    created(){
      //获取导航数据
      s3.ajax('/leftNav',{},'config')
        .then(res =>{
          this.navList = res.menuList;
          console.log(res)
      })
    }

  }
</script>