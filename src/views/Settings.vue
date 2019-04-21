<template>
  <el-container>
    <el-header height="70px">
      <HeaderComponent></HeaderComponent>
    </el-header>
    <el-container>
      <el-aside>
        <SettingsComponent></SettingsComponent>
      </el-aside>
      <el-main>
        <AvatarComponent></AvatarComponent>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import SettingsComponent from "@/components/settings/SettingsComponent.vue";
import AvatarComponent from "@/components/settings/AvatarComponent.vue";
@Component({
  components: {
    HeaderComponent,
    SettingsComponent,
    AvatarComponent
  }
})
export default class Settings extends Vue {
  // data
}
</script>
<style lang="scss" scoped>
.el-aside {
  margin-left: 20px !important;
}
</style>

