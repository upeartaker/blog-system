<template>
  <div class="home-wrapper">
    <el-container>
    <el-header height="70px" style="width:100%;">
      <HeaderComponent></HeaderComponent>
    </el-header>
    <el-main>
      <CarouselComponent></CarouselComponent>
      <SendWordComponent></SendWordComponent>
    </el-main>
  </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderComponent from '@/components/common/HeaderComponent.vue'; // @ is an alias to /src
import CarouselComponent from '@/components/home/CarouselComponent.vue';
import SendWordComponent from '@/components/home/SendWordComponent.vue';
// 利用decorator 修饰符来引入组件
@Component({
  components: {
    HeaderComponent,
    CarouselComponent,
    SendWordComponent,
  },
})
// 创建一个继承自vue的类，并暴露出来
export default class Home extends Vue {}
</script>
<style scope lang="scss">
@import "src/assets/styles/variable.scss";
.home-wrapper{
  height: 100%;
  background-image: url('https://upeartaker.github.io/img/home-bg.jpg');
}
.el-header {
  background: $bg-theme;
}
</style>

