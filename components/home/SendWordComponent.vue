<template>
  <h3>
    <span>{{hello}}</span>
  </h3>
</template>

<script>
export default {
  data() {
    return {
      hello: "Welcome to my blog"
    };
  }
};
</script>
<style lang="scss" scoped>
h3 {
  margin-top: 100px;
  width: 100%;
  text-align: center;
  line-height: 40px;
  height: 40px;
  font-size: 32px;
  color: white;
  span {
    transition: all 0.5s linear;
    height: 40px;
    width: 400px;
    display: inline-block;
    &:hover {
      transform: scale(2);
    }
  }
}
</style>

