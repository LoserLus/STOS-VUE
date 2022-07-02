<template>
  <div class="register-body">
    <div class="register-container">
      <div class="head">
        <div class="name">
          <div class="title">用户账号注册</div>
        </div>
      </div>
      <el-form label-position="top" class="register-form">
        <el-form-item label="账号">
          <el-input type="text" v-model="dgzUser.dgzUsername" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input type="text" v-model="dgzUser.dgzName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="学院">
          <el-select v-model="dgzUser.dgzDept" placeholder="请选择账号类型">
            <el-option
                v-for="item in [{
        value: 'A',
        label: '计算机学院'
      }, {
        value: 'B',
        label: '数学学院'
      }, {
        value: 'C',
        label: '土木学院'
      }, {
        value: 'D',
        label: '经管学院'
      }]"
                :key="item.value"
                :label="item.label"
                :value="item.label"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input type="text" v-model="dgzUser.dgzTel" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="dgzUser.dgzPassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input type="password" v-model="pwd2" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" @click="submitform" type="primary">立即注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: 'register',
  data() {
    return {
      //前后端的对象字段名保持一致
      dgzUser:{
        dgzUsername: '',
        dgzPassword: '',
        dgzName: '',
        dgzDept: '',
        dgzTel: '',
      },
      pwd2: ''
    }
  },
  methods: {
    submitform(event) {

      //检查注册信息是否正确
      let flag = 1;
      {

        if (this.dgzUser.dgzUsername == '') {
          alert('请输入账号!')
          flag = 0
        } else if (this.dgzUser.dgzName == '') {
          alert('请输入用户名!')
          flag = 0
        } else if (this.dgzUser.dgzDept == '') {
          alert('请选择院系!')
          flag = 0
        } else if (this.dgzUser.dgzPassword == '') {
          alert('请输入密码!')
          flag = 0
        } else if (this.pwd2 == '') {
          alert('请输入确认密码!')
          flag = 0
        } else if (this.dgzUser.dgzPassword != this.pwd2) {
          alert('密码不一致!')
          flag = 0
        }
      }
      console.log(flag);

      console.log(this.dgzUser);
      console.log(this.pwd2);
      if (flag == 1) {
        this.sendData();
      }
    },
    sendData() {
      const that = this;

      //const { proxy } = getCurrentInstance();
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8181/user/register/',
        headers:{
          'Content-Type': 'application/json' //传递数据为json时必须加上,否则服务器不识别报415
        },
        data:JSON.stringify(this.dgzUser) //转换为json对象
      }).then(function (data) {
        var list = eval(data.data);
        that.status = data.data;
        console.log(list.data);//list.data中为后台返回的注册结果
        if (list.data == '注册成功') {
          that.$router.push('/login');
        } else
          alert('注册失败！');
      })
    }
  }
}
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
  height: 600px;
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