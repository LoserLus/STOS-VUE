<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/st">st</router-link> |
    <router-link to="/login">login</router-link>|
    <router-link to="/register">register</router-link>
  </nav>
  <router-view/>
<!--  <template>-->
<!--    <div class="login-body">-->
<!--      <div class="login-container">-->
<!--        <div class="head">-->
<!--          <div class="name">-->
<!--            <div class="title">学校教材管理系统 </div>-->
<!--            <div class="tips">Vue3.0 后台管理系统</div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <el-form label-position="top"  ref="loginForm" class="login-form">-->
<!--          <el-form-item label="账号" prop="username">-->
<!--            <el-input type="text" autocomplete="off"></el-input>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="密码" prop="password">-->
<!--            <el-input type="password"  autocomplete="off"></el-input>-->
<!--          </el-form-item>-->
<!--          <el-form-item>-->
<!--            <el-button style="width: 100%" type="primary">立即登录</el-button>-->
<!--          </el-form-item>-->
<!--          <el-form-item>-->
<!--            <el-button style="width: 100%" type="primary">用户注册</el-button>-->
<!--          </el-form-item>-->
<!--        </el-form>-->
<!--      </div>-->
<!--    </div>-->
<!--  </template>-->

</template>

<style scoped>
.login-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  /* background-image: linear-gradient(25deg, #077f7c, #3aa693, #5ecfaa, #7ffac2); */
}
.login-container {
  width: 420px;
  height: 500px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
}
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 20px 0;
}
.head img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
.head .title {
  font-size: 28px;
  color: #1BAEAE;
  font-weight: bold;
}
.head .tips {
  font-size: 12px;
  color: #999;
}
.login-form {
  width: 70%;
  margin: 0 auto;
}
</style>
<style>
.el-form--label-top .el-form-item__label {
  padding: 0;
}
.login-form .el-form-item {
  margin-bottom: 12px;
}
</style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
