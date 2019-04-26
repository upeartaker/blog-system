<template>
  <div class="home-wrapper">
    <el-main>
      <CarouselComponent></CarouselComponent>
      <SendWordComponent></SendWordComponent>
    </el-main>
  </div>
</template>

<script>
import CarouselComponent from '~/components/home/CarouselComponent.vue';
import SendWordComponent from '~/components/home/SendWordComponent.vue';
export default {
  components: {
    CarouselComponent,
    SendWordComponent,
  },
  head(){
    return {
      title: 'blog',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My blog"
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.home-wrapper {
  height: 100%;
  width:100%;
  background-image: url("https://upeartaker.github.io/img/home-bg.jpg");
}
</style>

