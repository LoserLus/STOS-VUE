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
    <button>订购</button>

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
      }]
    }
  },
  methods: {
    getData() {
      console.log(this.tableData);

    },
    //SelectionChange 用于获取多选数据
    SelectionChange(val) {
      console.log(val);
    },
    changedMatNum(index,row,even){
      console.log('-------数量------');
      console.log("index：" + index);
      console.log("event.target.value：" + event.target.value);
      console.log("row：" + row);
      console.log("even：" + even);
      this.tableData[index].number=even;
      // console.log(even.currentTarget.nextElementSibling);
    }
  },
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