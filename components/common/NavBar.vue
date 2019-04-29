<template>
  <ul class="navigator">
    <li>
      <nuxt-link to="/">Home</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/blog">Blog</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/write">Write</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/about">About</nuxt-link>
    </li>
    <li class="el-btn">
      <el-button
        round
        size="mini"
        @click="handleSignIn"
      >Sign In</el-button>
    </li>
    <li class="el-btn">
      <el-button
        round
        size="mini"
        @click="handleSignUp"
      >Sign Up</el-button>
    </li>
    <li
      v-if="isLogin"
      class="nav-avatar"
    >
      <img
        src="https://user-gold-cdn.xitu.io/2019/1/3/1681263f274b8652?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
        @click="handleHref"
      >
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      isLogin: false
    };
  },
  methods: {
    handleHref() {
      this.$router.push({
        name: "settings"
      });
    },
    handleSignUp() {
      // 注册
      this.$router.push({
        name: "register"
      });
    },
    handleSignIn() {
      // 登录
      this.$router.push({
        name: "login"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/styles/variable.scss";
.navigator {
  overflow: hidden;
  li {
    float: left;
    height: 60px;
    line-height: 60px;
    padding: 5px 40px;
    font-size: 24px;
    text-align: center;
    a {
      color: $font-title !important;
    }
    img {
      width: 40px;
      height: 40px;
      transform: translateY(-30%);
      margin-top: 50%;
      border-radius: 50%;
    }
  }
  .el-btn {
    float: right;
  }
  .nav-avatar {
    float: right;
    cursor: pointer;
  }
}
</style>

