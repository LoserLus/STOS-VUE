<template>
  <div class="login-body">
    <div class="login-container">
      <div class="head">
        <div class="name">
          <div class="title">学校教材管理系统</div>
          <div class="tips">Vue3.0 后台管理系统</div>
        </div>
      </div>
      <el-form label-position="top" rules="rules" class="login-form">
        <el-form-item label="账号类型" prop="username">
        <el-select v-model="type" placeholder="请选择账号类型">
          <el-option
              v-for="item in [{
        value: 'A',
        label: '学生'
      }, {
        value: 'B',
        label: '教师'
      }, {
        value: 'C',
        label: '教材发行人员'
      }, {
        value: 'D',
        label: '采购人员'
      }]"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
        </el-form-item>
        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model="account"  autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="pwd" autocomplete="off" show-password ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" @click="uploadForm" type="primary">立即登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" @click="register" type="primary">用户注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<!--<script  setup>-->
<!--import axios from 'axios'-->
<!--import { reactive, ref, toRefs } from 'vue'-->
<!--const type = ref('')-->
<!--const input1 = ref('')-->
<!--const input2 = ref('')-->

<!--const login = async () => {-->
<!--    var flag=1-->
<!--  if(type.value=='') {-->
<!--    alert('请选择账户类型!')-->
<!--    flag=0-->
<!--  }-->
<!--    else if(input1.value=='') {-->
<!--      alert('请输入用户名!')-->
<!--      flag=0-->
<!--    }-->
<!--    else if(input2.value=='') {-->
<!--      alert('请输入密码!')-->
<!--      flag=0-->
<!--    }-->
<!--  if (flag==1) {-->
<!--    axios-->
<!--        .post('/login', {-->
<!--      type: type.value || '',-->
<!--      userName: input1.value || '',-->
<!--      password: input2.value-->
<!--    }).then(function (response) {-->
<!--      console.log(response.data);-->
<!--    }).catch(function (error) {-->
<!--          console.log(error);-->
<!--        });-->
<!--    axios-->
<!--        .get('/login?type').then(function (response) {-->
<!--      console.log(response.data);-->
<!--    }).catch(function (error) {-->
<!--      console.log(error);-->
<!--    });-->
<!--}}-->
<!--const register = async () => {-->
<!--  alert('redister!')-->
<!--}-->
<!--</script>-->
<script>

import {getCurrentInstance} from "vue";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      account: '',
      pwd: '',
      type:'',
      status:''
    }
  },
    methods: {
      uploadForm(event)
      {
        console.log(this.account);
        console.log(this.pwd);
        console.log(this.type);
        this.sendData();
      },
      sendData()
      {
        const that = this;

        //const { proxy } = getCurrentInstance();
        axios({
          method:'get',
          url:'http://127.0.0.1:8181/userlogin/',
          params:{
            username:this.account,
            pwd:this.pwd,
            type:this.type
          }
        }).then(function (data){
          that.status = data.data;
          console.log(that.status);
        })
      }
    }
}
</script>
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