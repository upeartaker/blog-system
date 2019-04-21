<template>
  <ul class="navigator">
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/blog">Blog</router-link>
    </li>
    <li>
      <router-link to="/write">Write</router-link>
    </li>
    <li>
      <router-link to="/about">About</router-link>
    </li>
    <li>
      <img
        src="https://user-gold-cdn.xitu.io/2019/1/3/1681263f274b8652?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
        @click="handleHref"
      >
    </li>
  </ul>
</template>

<script lang="ts">
import {
  Prop,
  Vue,
  Emit,
  Watch,
  Model,
  Provide,
  Component,
  Inject
} from "vue-property-decorator";
@Component
export default class HeaderComponent extends Vue {
  // data
  public activeName: string = "xiaming";

  // methods
  public handleClick(tab: object | string, event: object): void {
    // console.log(tab, event);
  }

  public handleHref(): void {
    this.$router.push({
      name:'settings'
    });
  }

  // watch
  @Watch("activeName")
  public onDemoChange(newVal: string, oldVal: string) {
    // console.log(newVal);
  }
  // computed
  get compute() {
    return `hello ${this.activeName}`;
  }
  // mounted
  public mounted() {
    // alert(11);
  }
}
</script>

<style lang="scss" scoped>
// 导入_.scss文件，scss不会对这个文件进行编译。所以可以使用scss变量
@import "src/assets/styles/variable.scss";
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
    &:last-child {
      float: right;
      cursor: pointer;
    }
  }
}
</style>
