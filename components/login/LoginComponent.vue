<template>
  <el-card>
    <div class="login-container">
      <el-form
        ref="info"
        :model="info"
        :rules="rules"
        label-width="80px"
      >
        <el-form-item
          label="用户名"
          prop="username"
        >
          <el-input v-model="info.username"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input v-model="info.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="handleRegister"
          >立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      info: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 5, max: 20, message: "长度在 5 到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleRegister() {
      this.$refs["info"].validate(valid => {
        if (valid) {
          let params = {
            username: this.info.username,
            password: this.info.password
          };
          axios
            .post("http://127.0.0.1:4000/login", JSON.stringify(params), {
              headers: { "Content-Type": "application/json"},
            })
            .then(res => {
              if (res.data.state) {
                this.$message({
                  message: "登录成功",
                  type: "success",
                  duration: 1000,
                  onClose: () => {
                    // this.$router.push('/');
                  }
                });
              } else {
                this.$message("账号或密码错误");
              }
            });
        } else {
          this.$message("请输入符合规则的用户名和密码");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.el-card {
  width: 40%;
  height: 40%;
  position: relative;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>
