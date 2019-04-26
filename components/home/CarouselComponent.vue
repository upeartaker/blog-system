<template>
  <el-carousel
    :interval="4000"
    type="card"
    height="300px"
  >
    <el-carousel-item
      v-for="(item,index) in carouselData"
      :key="index"
    >
      <img
        :src="item.imgUrl"
        alt
      >
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data() {
    let mockData = {
      imgUrl: "https://user-gold-cdn.xitu.io/2019/4/17/16a2afdbb2034c0c?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1"
    }
    return {
      carouselData: Array(6).fill(mockData)
    };
  },
  created(){

  }
};
</script>
<style lang="scss" scoped>
.el-carousel__item img {
  width: 100%;
  height: 100%;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

