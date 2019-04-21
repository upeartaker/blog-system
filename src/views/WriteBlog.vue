<template>
  <el-container>
    <el-header height="70px">
      <HeaderComponent></HeaderComponent>
    </el-header>
    <el-main>
      <EditorComponent></EditorComponent>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderComponent from '@/components/common/HeaderComponent.vue';
import EditorComponent from '@/components/write/EditorComponent.vue';
@Component({
  components: {
    HeaderComponent,
    EditorComponent,
  }
})
export default class WriteBlog extends Vue {
  // data
}
</script>
