<template>
  <el-card :body-style="{ padding: '0px' }">
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      class="image"
    >
    <div style="padding: 14px;" class="toggle-wrapper">
      <span>{{stateName}}</span>
      <div class="bottom clearfix">
        <el-button
          type="primary"
          round
          @click="changeAvatar"
        >修改头像</el-button>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      stateName: "小明"
    };
  },
  methods: {
    changeAvatar() {
      console.log(1);
    }
  }
};
</script>
<style lang="scss" scoped>
.el-card {
  margin-top: 40px;
  .toggle-wrapper{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
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

