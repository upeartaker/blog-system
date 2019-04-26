<template>
  <el-main>
    <EditorComponent></EditorComponent>
  </el-main>
</template>
<script>
import EditorComponent from '@/components/write/EditorComponent.vue';
export default {
  components: {
    EditorComponent
  },
  head(){
    return{
      title: 'papapa',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "papapa"
        }
      ]
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
