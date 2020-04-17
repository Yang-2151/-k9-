<template>
  <div class="login">
    <p class="title">
      <img src="../assets/imgs/logo.jpg" alt /> K9电力现货竞价决策支持系统
    </p>
    <div class="login_form">
      <el-form ref="form" :model="form" :rules="rules">
        <div class="login-head">
          <h1>登陆</h1>
          <p>
            没有账号？
            <a href="#">点此注册</a>
          </p>
        </div>
        <el-form-item prop="name">
          <el-input v-model="form.name" prefix-icon="el-icon-s-custom" placeholder="手机/邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input v-model="form.pwd" prefix-icon="el-icon-lock" show-password placeholder="密码"></el-input>
        </el-form-item>
        <div class="fields">
          <div>
            <input type="checkbox" name id />记住我
          </div>
          <p>
            <a href="#">短信验证登录</a>
          </p>
        </div>
        <el-form-item>
          <el-button class="login_btn" @click="onSubmit('form')">登录</el-button>
        </el-form-item>
        <p class="forget">
          <a href="#">已有账号，忘记密码?</a>
        </p>
      </el-form>
      <p class="oschina">
        <a href="#">
          <img src="../assets/imgs/oschina.png" alt /> 使用OSChina账号登录
        </a>
      </p>
      <!-- 其他方式登录 -->
      <div class="others">
        <div class="line"></div>
        <span>其他方式登录</span>
        <div class="line"></div>
      </div>
      <div class="others-account">
        <a href="#">
          <img src="../assets/imgs/微信.png" alt />
        </a>
        <a href="#">
          <img src="../assets/imgs/qq.png" alt />
        </a>
        <a href="#">
          <img src="../assets/imgs/github.png" alt />
        </a>
        <a href="#" class="more"> 
          <el-popover
            placement="top-start"
            width="200"
            trigger="hover"
            content=""
          >
            <el-button slot="reference">
              <img src="../assets/imgs/更多.png" alt />
            </el-button>
          </el-popover>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        pwd: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入登陆名", trigger: "blur" },
          { min: 2, max: 20, message: "长度在 2 到 20 个字符", trigger: "blur" }
        ],
        pwd: [
          { required: true, message: "请输入登陆密码", trigger: "blur" },
          { min: 6, message: "密码长度必须在6位以上", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onSubmit(login_form) {
      this.$refs[login_form].validate(res => {
        if (res) {
          alert("submit!");
          this.$router.push("/index");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" >
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Liberation Sans",
    "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", "Wenquanyi Micro Hei",
    "WenQuanYi Zen Hei", "ST Heiti", SimHei, SimSun, "WenQuanYi Zen Hei Sharp",
    sans-serif;
}
.login {
  height: 100%;
  background: url("../assets/imgs/background.jpg") no-repeat center;
  // position: relative;
  display: flex;
  justify-content: space-between;
}

/* 登录页面标题 */
.login .title {
  color: #fff;
  padding: 20px 0 0 30px;
}
.login .title img {
  margin-right: 10px;
}
/* 登录组件 */
.login_form {
  align-self: center;
  border: 1px solid skyblue;
  width: 262px;
  height: 380px;
  background: #fff;
  padding: 22px 34px;
  border-radius: 5px;
  margin-right: 60px;
}
.login_form h1 {
  color: #79daf8;
  /* margin-top: 15px; */
}
.login_form .login-head {
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}
/* 用户名及密码框 */
.el-input__inner {
  height: 35px !important;
}
.fields {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-bottom: 10px;
}
/* 忘记密码 */
.login_form .forget {
  text-align: center;
  margin-bottom: 10px;
}
/* oschina账号登录 */
.login .oschina {
  text-align: center;
  margin-bottom: 14px;
}
/* 登录按钮 */
.login_form .login_btn {
  width: 100%;
  color: #fff;
  background: #1ec2ff;
  border: none;
}

.login_form .el-button:focus{
  color: #fff;
  background:#1ec2ff ;
}
.login_form .el-button:hover{
   color: #fff;
  background:#1ec2ff ;
}
// 其他登录方式
.login .others {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.login .others .line {
  width: 90px;
  height: 0;
  border-top: 1px solid #ccc;
}
.login .others span {
  color: #ccc;
}
.login .others-account {
  display: flex;
  justify-content: space-around;
  .more {
    .el-button {
      width: 28px;
      height: 28px ;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top:none;
    }
    .el-button:hover{
      background-color: #fff!important;
    }
  }
}
</style>