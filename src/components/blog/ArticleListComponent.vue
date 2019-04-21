<template>
  <el-table :data="articleList">
    <el-table-column prop="tag" label="标签" width="100"></el-table-column>
    <el-table-column prop="date" label="日期" width="200"></el-table-column>
    <el-table-column prop="title" label="标题"></el-table-column>
    <el-table-column label="操作" fixed="right" width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button @click="handleWrite" type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class ArticleListComponent extends Vue {
  // data
  public mockList: object = {
    tag: "随笔",
    date: "2016-05-02",
    title: "JS事件机制之Microtasks & Tasks & Queues"
  };
  public articleList: number[] = Array(20).fill(this.mockList);

  public vm: any = this; // 说明：this.$notify 实际上是elementUI上提供的方法，没有通过typescript注册，所以被tslint检测会报错，所以我将this实例进行一次ts注册。

  // lifecycle
  public created() {
    // console.log(this.articleList);
  }

  public handleClick(row: any): void {
    this.vm.$notify({
      title: "提示信息",
      message: "此功能开发中",
      duration: 1000
    });
  }
  public handleWrite(): void {
    this.vm.$notify({
      title: "提示信息",
      message: "此功能开发中",
      duration: 1000
    });
  }
}
</script>
<style lang="scss" scoped>
</style>


