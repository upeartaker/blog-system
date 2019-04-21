<template>
    <el-container>
        <el-header height="70px">
            <HeaderComponent></HeaderComponent>
        </el-header>
    </el-container>
</template>
<script lang="ts">
import {Component,Vue} from 'vue-property-decorator';
import HeaderComponent from '@/components/common/HeaderComponent.vue';
@Component({
    components:{
        HeaderComponent,
    },
})
export default class Settings extends Vue{
    // data
}
</script>
<style lang="scss" scoped>

</style>

