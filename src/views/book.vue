<template>
  <div class="common-layout">

    <el-table ref="multipleTableRef"
              :data="tableData"
              @selection-change="SelectionChange"
    >
      <el-table-column
          type="selection"
          width="55">
      </el-table-column>

      <el-table-column prop="isbn" label="书号"/>
      <el-table-column prop="bookName" label="书名"/>
      <el-table-column prop="author" label="作者"/>
      <el-table-column prop="publish" label="出版社"/>
      <el-table-column prop="price" label="单价"/>

      <el-table-column label="数量" align="center" prop="matNumber">
        <template inline-template v-slot="scope">
          <el-input-number v-model="scope.row.number"
                           @change="changedMatNum(scope.$index,scope.row,$event)"
                           placeholder="请输入数量">
          </el-input-number>
        </template>
      </el-table-column>

    </el-table>
    <button @click="uploadForm" >订购</button>

  </div>
</template>

<script>
import axios from "axios";
import {ref} from 'vue';

export default {
  name: 'book',
  data() {
    return {
      tableData: [{
        isbn: '456789',
        bookName: '高等数学',
        author: '数学老师',
        publish: '山东出版社',
        price: '10',
        number: '1'
      }],
      testData:[{
        isbn:'9787100186438',
        dgTotal:'1',
        username:sessionStorage.getItem('username')
      }]
    }
  },

  methods: {
    //SelectionChange 用于获取多选数据
    SelectionChange(val) {
      console.log(val);
    },
    //用于数量选择
    changedMatNum(index,row,even){
      console.log('-------数量------');
      console.log("index：" + index);
      console.log("event.target.value：" + event.target.value);
      console.log("row：" + row);
      console.log("even：" + even);
      this.tableData[index].number=even;
      // console.log(even.currentTarget.nextElementSibling);
    },
    uploadForm(){
        const that = this;
      console.log(sessionStorage.getItem('username'));
        //const { proxy } = getCurrentInstance();
        axios({
          method: 'post',
          withCredentials: true,

          crossDomain: true,
          url: 'http://127.0.0.1:8181/user/textorder/',
          headers:{
            'Content-Type': 'application/json' //传递数据为json时必须加上,否则服务器不识别报415
          },
          data:JSON.stringify(this.testData) //转换为json对象
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
  },
  //获取初始页面
  created() {
    const that = this;
    //const { proxy } = getCurrentInstance();
    axios({
      method: 'get',
      url: 'http://127.0.0.1:8181/user/textlist/',
    }).then(function (data) {
      var list = eval(data.data);
      console.log(list.data);
      that.tableData = list.data;
      //初始化书所有数量为1
      for (let i=0; i<that.tableData.length; i++)
      {
        that.tableData[i].number=1;
      }
    })
  }
}
</script>


<style>

.el-header,
.el-footer {
  background-color: #FFFFFF;
  color: #333;
  text-align: center;
  height: 55px;
  line-height: 80px;
  padding: 0px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 450px;
}

</style>