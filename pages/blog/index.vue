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
import axios from 'axios';
export default {
  layout: "default",
  components: {
    TagsListComponent,
    ArticleListComponent
  },
  head(){
    return{
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "xixixi"
        }
      ]
    }
  },
  asyncData(context) {
    return axios.get('http://127.0.0.1:4000/meta/blog').then(res=>{
      return {
        title:res.data.title
      }
    })
  },
};
</script>
<style lang="scss" scoped>
.el-main , .el-aside{
  overflow: unset!important;
}
</style>
