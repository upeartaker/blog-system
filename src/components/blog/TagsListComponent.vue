<template>
  <div class="container">
    <el-alert title="唯有爱和美食不可辜负" type="success" :closable="false"></el-alert>
    <el-card
      :body-style="{ padding: '0px' }"
      style="margin-top:5px;"
      v-for="(item,index) in renderData"
      :key="index"
    >
      <img :src="item.imgUrl" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ item.currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class TagsListComponent extends Vue {
  // data
  public mockData: object = {
    imgUrl:
      'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
    currentDate: new Date(),
  };

  public renderData: number[] = Array(3).fill(this.mockData);
}
</script>
<style lang="scss" scoped>
.container {
  .el-alert {
    margin-top: 25px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 90%;
    height:90%;
    margin:5% 0 0 5%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both;
  }
}
</style>

