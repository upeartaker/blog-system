<template>
  <div class="settings-container">
    <h3>个人信息</h3>
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      size="large"
    >
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="爱好">
        <el-select
          v-model="form.hobby"
          placeholder="喜欢什么"
        >
          <el-option
            label="写代码"
            value="写代码"
          ></el-option>
          <el-option
            label="加班"
            value="加班"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.date1"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item
        label="是否热爱代码"
        label-width="120px;"
      >
        <el-switch v-model="form.likeCode"></el-switch>
      </el-form-item>
      <el-form-item label="个人标签">
        <el-checkbox-group v-model="form.type">
          <el-checkbox
            label="码农"
            name="type"
          ></el-checkbox>
          <el-checkbox
            label="自身码农"
            name="type"
          ></el-checkbox>
          <el-checkbox
            label="超级码农"
            name="type"
          ></el-checkbox>
          <el-checkbox
            label="我是畜生"
            name="type"
          ></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.gender">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="个人简介">
        <el-input
          type="textarea"
          v-model="form.desc"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="handleSubmit"
        >立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        hobby: "",
        date: "",
        likeCode: false,
        type: [],
        gender: "",
        desc: ""
      }
    };
  },
  methods:{
      handleSubmit(){
          console.log('ok')
      }
  }
};
</script>
<style lang="scss" scoped>
.settings-container {
  h3 {
    height: 40px;
    line-height: 40px;
    font-size: 32px;
    text-align: center;
    margin: 10px 0px;
  }
}
</style>

