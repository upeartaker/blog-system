<template>
  <div class="blog-container">
    <HeaderComponent></HeaderComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderComponent from "@/components/HeaderComponent.vue"; // @ is an alias to /src
// 利用decorator 修饰符来引入组件
@Component({
  components: {
    HeaderComponent,
  },
})
// 创建一个继承自vue的类，并暴露出来
export default class Blog extends Vue {}
</script>

