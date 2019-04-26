<template>
  <el-container>
    <el-aside>
      <SettingsComponent></SettingsComponent>
    </el-aside>
    <el-main>
      <AvatarComponent></AvatarComponent>
    </el-main>
  </el-container>
</template>
<script>
import SettingsComponent from "@/components/settings/SettingsComponent.vue";
import AvatarComponent from "@/components/settings/AvatarComponent.vue";
export default {
  components: {
    SettingsComponent,
    AvatarComponent
  },
  head(){
    return{
      title: 'dongdongdnog',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "dongdongdong"
        }
      ]
    }
  }
};
</script>
<style lang="scss" scoped>
.el-aside {
  margin-left: 20px !important;
}
</style>

