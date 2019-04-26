<template>
  <el-container>
    <el-header>
      <NavBar></NavBar>
    </el-header>
    <el-container>
      <nuxt />
    </el-container>
  </el-container>
</template>
<script>
import NavBar from '~/components/common/NavBar.vue';
export default {
  components:{
    NavBar
  }
};
</script>

<style lang="scss">
@import "~assets/styles/variable.scss";
body{
  height:100%;
}
#__nuxt{
  height:100%;
}
#__layout{
  height:100%;
}
.el-header{
  background: $bg-theme;
  height:70px!important;
}
.el-container{
  width:100%;
  height:100%;
  .el-main{
    width:100%;
    height:100%;
  }
}
</style>
