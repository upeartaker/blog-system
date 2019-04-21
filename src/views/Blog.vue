<template>
  <el-container>
    <el-header height="70px" style="width:100%;">
      <HeaderComponent></HeaderComponent>
    </el-header>
    <el-container>
      <el-aside width="30%">
        <TagsListComponent></TagsListComponent>
      </el-aside>
      <el-main>
        <ArticleListComponent></ArticleListComponent>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderComponent from '@/components/common/HeaderComponent.vue'; // @ is an alias to /src
import ArticleListComponent from '@/components/blog/ArticleListComponent.vue';
import TagsListComponent from '@/components/blog/TagsListComponent.vue';
// 利用decorator 修饰符来引入组件
@Component({
  components: {
    HeaderComponent,
    ArticleListComponent,
    TagsListComponent,
  },
})
// 创建一个继承自vue的类，并暴露出来
export default class Home extends Vue {}
</script>
<style scope lang="scss">
@import "src/assets/styles/variable.scss";
.el-header {
  background: $bg-theme;
}
</style>

