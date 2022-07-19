<template>
  <div class="common-layout">

    <el-table ref="multipleTableRef"
              :data="tableData"
              @selection-change="SelectionChange"
              border style="width: 100%"
              height='380'
    >
      <el-table-column
          prop="result"
          type="selection"
          width="55">
      </el-table-column>

      <el-table-column prop="isbn" label="书号"/>
      <el-table-column prop="bookName" label="书名"/>
      <el-table-column prop="author" label="作者"/>
      <el-table-column prop="publish" label="出版社"/>
      <el-table-column prop="price" width="80" label="单价"/>

      <el-table-column label="数量" align="center" prop="matNumber">
        <template inline-template v-slot="scope">
          <el-input-number v-model="scope.row.dgTotal" :min="1" :max="999"
                           @change="changedMatNum(scope.$index,scope.row,$event)"
                           placeholder="请输入数量">
          </el-input-number>
        </template>
      </el-table-column>

    </el-table>
    <el-button color="#ff3300" :dark="isDark" @click="uploadForm">立即订购</el-button>

  </div>
</template>

<script>
import axios from "axios";
import {ref} from 'vue';

let name = sessionStorage.getItem('username');
export default {
  name: 'book',
  data() {
    let val;
    return {
      tableData: [{
        isbn: '456789',
        bookName: '高等数学',
        author: '数学老师',
        publish: '山东出版社',
        price: '10',
        dgTotal: '1',
        dgzUsername: ''
      }],
      testData: [{
        isbn: '',
        dgTotal: '0',
        dgzUsername: sessionStorage.getItem('username'),
      }],
      val: []
    }
  },

  methods: {
    //SelectionChange 用于获取多选数据
    SelectionChange(val) {
      console.log('----------多选框------------')
      console.log(val);
      this.val = val;
      console.log(this.val);
      console.log(this.tableData)
    },
    //用于数量选择
    changedMatNum(index, row, even) {
      console.log('-------数量------');
      console.log("index：" + index);
      console.log("even：" + even);
      this.tableData[index].number = even;
      // console.log(even.currentTarget.nextElementSibling);
    },
    uploadForm() {
      const that = this;
      console.log('-----------上传数据--------------');
      console.log('val:' + this.val);
      console.log('val length:' + this.val.length);
      console.log('username:' + sessionStorage.getItem('username'));
      if (this.val.length == 0)
        alert('请选择想订书籍及数量，然后点击订购')
      else {
        //const { proxy } = getCurrentInstance();
        axios({
          method: 'post',
          url: '/api/user/textorder/',
          headers: {
            //'Content-Type':'text/plain'
            'Content-Type': 'application/json' //传递数据为json时必须加上,否则服务器不识别报415
          },
          data: JSON.stringify(that.val) //转换为json对象
        }).then(function (response) {
          let list = eval(response.data);
          console.log(list.data);//list.data中为后台返回的结果
          if (list.data == '成功订购') {
            alert('订购成功！')
          } else
            alert('订购失败！');
        })
      }
    }
  },
  //获取初始页面
  created() {
    console.log(sessionStorage);
    const that = this;
    //const { proxy } = getCurrentInstance();
    axios({
      method: 'get',
      url: '/api/user/textlist/',
    }).then(function (response) {
      let list = eval(response.data);
      console.log(list.data);
      that.tableData = list.data;
      //初始化书所有数量为1,初始化用户名为登录用户账号,
      for (let i = 0; i < that.tableData.length; i++) {
        that.tableData[i].dgTotal = 1;
        that.tableData[i].dgzUsername = sessionStorage.getItem('username');
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


</style>