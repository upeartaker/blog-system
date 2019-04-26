<template>
  <el-container>
    <el-aside width="30%">
      <TagsListComponent></TagsListComponent>
    </el-aside>
    <el-main>
      <ArticleListComponent></ArticleListComponent>
    </el-main>
  </el-container>
</template>
<script>
import TagsListComponent from "~/components/blog/TagsListComponent.vue";
import ArticleListComponent from "~/components/blog/ArticleListComponent.vue";
export default {
  layout: "default",
  components: {
    TagsListComponent,
    ArticleListComponent
  },
  head(){
    return{
      title: 'xixixi',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "xixixi"
        }
      ]
    }
  }
};
</script>
<style lang="scss" scoped>
.el-main , .el-aside{
  overflow: unset!important;
}
</style>
