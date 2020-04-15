<template>
  <div class="login">
    <div class="login_form">
      <h1>登陆</h1>
      <p> <input type="text" name id placeholder="手机/邮箱" v-model="loginForm.name" /></p>
      <p><input type="password" name id placeholder="密码" v-model="loginForm.pwd" /></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
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
    onSubmit(form) {
      var that = this;
      //验证用户名和密码的格式是否满足要求
      this.$refs[form].validate(function(result) {
        if (result) {
          //that.$router.push('/index'); //如果登陆成功，则跳转到后面主界面
          //验证成功时接收数据
          var account = that.loginForm.name;
          var password = that.loginForm.pwd;

          //通过axios将数据发送到服务器去验证
          that.axios
            .post(
              "/users.php?a=login",
              "account=" + account + "&password=" + password
            )
            .then(d => {
              if (d.data.code == 0) {
                //登陆成功
                sessionStorage.setItem("token", d.data.token);
                sessionStorage.setItem("id", d.data.data.id);
                //将用户数据存储到sessionStorage中
                sessionStorage.setItem("user", JSON.stringify(d.data.data));

                that.$router.push("/index");
                that.$message({
                  message: "恭喜你，登陆成功！",
                  type: "success"
                });
              } else {
                //登陆失败
                that.$message.error(d.data.msg);
                return false;
              }
            });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less">

  .login_form {
    background: #fff;
    width: 500px;
    height: 400px;
    border: 1px solid #000;
    margin: 50px auto;
    box-shadow: 20px 20px 20px #f2f2f2;
    h1{
      margin-left: 45px;
    }
    p{
      input{
        width: 400px;
        height: 40px;
        margin:0 44px;
        padding-left: 10px;
        outline: 0;
        border-radius: 5px;
        border: 1px solid #ccc;
      }
    }
  
}
</style>