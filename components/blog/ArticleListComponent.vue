<template>
  <el-table :data="articleList">
    <el-table-column
      prop="tag"
      label="标签"
      width="100"
    ></el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="200"
    ></el-table-column>
    <el-table-column
      prop="title"
      label="标题"
    ></el-table-column>
    <el-table-column
      label="操作"
      fixed="right"
      width="100"
    >
      <template slot-scope="scope">
        <el-button
          @click="handleClick(scope.row)"
          type="text"
          size="small"
        >查看</el-button>
        <el-button
          @click="handleWrite"
          type="text"
          size="small"
        >编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  // data
  data() {
    let mockData = {
      tag: "随笔",
      date: "2016-05-02",
      title: "JS事件机制之Microtasks & Tasks & Queues"
    };
    return {
      articleList: Array(20).fill(mockData)
    };
  },

  // lifeCycle

  // methods
  methods: {
    handleClick(row) {
      this.$notify({
        title: "提示信息",
        message: "此功能开发中",
        duration: 1000
      });
    },
    handleWrite() {
      this.$notify({
        title: "提示信息",
        message: "此功能开发中",
        duration: 1000
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
