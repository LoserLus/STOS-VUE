<template>
  <div class="register-body">
    <div class="register-container">
      <div class="head">
        <div class="name">
          <div class="title">用户账号注册</div>
        </div>
      </div>
      <el-form label-position="top" rules="rules" class="register-form">
        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model="input1"  autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="input2" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password">
          <el-input type="password" v-model="input3" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%"  @click="register" type="primary">立即注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script  setup>
import axios from 'axios'
import { reactive, ref, toRefs } from 'vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const register = async () => {
  var flag=1
  if(input1.value=='') {
    alert('请输入用户名!')
    flag=0
  }
  else if(input2.value=='') {
    alert('请输入密码!')
    flag=0
  }
  else if(input3.value=='') {
    alert('请输入确认密码!')
    flag=0
  }
  else if(input2.value!=input3.value) {
    alert('密码不一致!')
    flag=0
  }
  if (flag==1) {
    axios.post('/register', {
      userName: input1.value || '',
      password: input2.value
    })
     {
    alert('注册失败!!')
    return false;
  }
}}
</script>

<style scoped>
.register-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  /* background-image: linear-gradient(25deg, #077f7c, #3aa693, #5ecfaa, #7ffac2); */
}
.register-container {
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
.register-form {
  width: 70%;
  margin: 0 auto;
}
</style>
<style>
.el-form--label-top .el-form-item__label {
  padding: 0;
}
.register-form .el-form-item {
  margin-bottom: 12px;
}
</style>