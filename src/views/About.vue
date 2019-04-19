<template>
  <div class="about">
    <HeaderComponent></HeaderComponent> 
    <h1>This is an about page</h1>
  </div>
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

