<template>
  <div class="home-wrapper">
    <el-main>
      <CarouselComponent></CarouselComponent>
      <SendWordComponent :message="hello"></SendWordComponent>
    </el-main>
  </div>
</template>

<script>
import CarouselComponent from "~/components/home/CarouselComponent.vue";
import SendWordComponent from "~/components/home/SendWordComponent.vue";
import axios from "axios";
export default {
  components: {
    CarouselComponent,
    SendWordComponent
  },
  middleware: 'getCookie',
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My blog"
        }
      ]
    };
  },
  asyncData(context) {
    return axios.get("http://127.0.0.1:4000/meta").then(res => {
      return {
        hello: res.data.say,
        title: res.data.title
      };
    });
  }
};
</script>

<style lang="scss" scoped>
.home-wrapper {
  height: 100%;
  width: 100%;
  background-image: url("https://upeartaker.github.io/img/home-bg.jpg");
}
</style>

