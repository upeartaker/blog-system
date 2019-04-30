<template>
  <div class="editor-container">
    <no-ssr>
      <el-form :model="details">
        <el-form-item label="标题">
          <el-input
            :v-model="details.title"
            placeholder="请输入标题"
          ></el-input>
        </el-form-item>
        <el-form-item label="标签">
          <el-select
            v-model="details.tag"
            placeholder="请选择标签"
          >
            <el-option
              label="随笔"
              value="随笔"
            ></el-option>
            <el-option
              label="记事"
              value="记事"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <mavon-editor
        :toolbar="toolbar"
        :subfield="false"
        @change="editorChange"
        @save="editorSave"
      ></mavon-editor>
    </no-ssr>
  </div>
</template>
<script>
import "mavon-editor/dist/css/index.css";
var mavonEditor = require("mavon-editor");
import axios from "axios";
export default {
  components: {
    "mavon-editor": mavonEditor.mavonEditor
  },
  data() {
    return {
      toolbar: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      },
      details: {
        title: "",
        tag: ""
      }
    };
  },
  methods: {
    editorChange(value, render) {
      // console.log(value, render);
      this.checkDetails(1, "");
    },
    editorSave(value, render) {
      // TODO 处理上传问题
      let params = {
        details: render,
        title: this.details.title,
        tag: this.details.tag
      };
      axios
        .post("/api/article/save", JSON.stringify(params), {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(res => {
          if (res.data.state && res.data.code === 1) {
            this.$message({
              message: "保存成功",
              duration: 2000,
              onClose: () => {
                this.$router.push({
                  name: "blog"
                });
              }
            });
          } else {
            this.$message({
              message: "用户未登录",
              duration: 2000,
              onClose: () => {
                this.$router.push({
                  name: "login"
                });
              }
            });
          }
        });
    },
    checkDetails(...args) {
      if (args.length === 0) {
        this.$message({
          message: "标题和标签不能为空",
          duration: 1000
        });
      }
      args.map(item => {
        if (!item) {
          this.$message({
            message: "标题和标签不能为空",
            duration: 1000
          });
        }
      });
      if (this.details.title && this.details.tag) {
        return true;
      } else {
        this.$message({
          message: "标题和标签不能为空",
          duration: 1000
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.v-note-wrapper {
  min-height: 600px !important;
}
</style>

