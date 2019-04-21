<template>
  <el-container>
    <el-header height="70px">
      <HeaderComponent></HeaderComponent>
    </el-header>
    <el-main>
      <h1>About Me</h1>
    </el-main>
  </el-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import HeaderComponent from '@/components/common/HeaderComponent.vue';
@Component({
  components: {
    HeaderComponent,
  },
})
export default class About extends Vue {}
</script>
<style lang="scss" scoped>

</style>


