<template>
  <el-card :body-style="{ padding: '0px' }">
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      class="image"
    >
    <div style="padding: 14px;">
      <span>{{stateName}}</span>
      <div class="bottom clearfix">
        <el-button type="primary" round @click="changeAvatar">修改头像</el-button>
      </div>
    </div>
  </el-card>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Mutation, State } from "vuex-class";
@Component
export default class AvatarComponent extends Vue {
  // data
  public vm: any = this;
  public name: string = "";

  // state
  @State(state => state.name) stateName: any;

  // mutation
  @Mutation
  CHANGE_NAME: any;

  // methods
  changeAvatar():void{
      this.CHANGE_NAME('张飞')
  }

  // lifeCycle
  public mounted() {
    // console.log(this.stateName);
  }
}
</script>
<style lang="scss" scoped>
.el-card {
  margin-top: 40px;
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
  }

  .image {
    width: 50%;
    margin-left: 50%;
    transform: translate(-50%);
    border-radius: 50%;
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

