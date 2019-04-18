<template>
    <header>
        <el-header>
            <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="top" >
                <el-tab-pane label="首页" name="first">首页</el-tab-pane>
                <el-tab-pane label="我的博客" name="second">我的博客</el-tab-pane>
                <el-tab-pane label="撰写新的博客" name="third">撰写新的博客</el-tab-pane>
            </el-tabs>
        </el-header>
    </header>
</template>

<script lang="ts">
    import {Prop, Vue ,Emit, Watch,Model,Provide,Component,Inject} from "vue-property-decorator";
    @Component
    export default class HeaderComponent extends Vue {
        // data
        public activeName:string = "xiaming";

        // methods
        public handleClick(tab:object|string,event:object):void {
            console.log(tab,event);
        }

        // watch
        @Watch('demo')
        onDemoChange(newVal: string , oldVal: string) {
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
    .header{
        height:100px;
        width:100%;
    }
    .el-tabs__item{
        height:60px!important;
        font-size:20px;
        line-height: 60px!important;
    }
</style>
