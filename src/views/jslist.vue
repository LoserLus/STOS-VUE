<template>

  <el-table
      :data="tableData"
  >
    <el-table-column prop="jsId" label="进书单号"/>
    <el-table-column prop="isbn" label="书号"/>
    <el-table-column prop="cgTotal" label="现缺书数"/>
    <el-table-column label="采购数量" align="center">
      <template inline-template v-slot="scope">
        <el-input-number v-model="scope.row.dgTotal" :min='0' :max="999"
                         @change="changedMatNum(scope.$index,scope.row,$event)"
                         placeholder="请输入数量">
        </el-input-number>
      </template>
    </el-table-column>

    <el-table-column prop="buybutton" label="操作">
      <template #default="scope">
        <el-button @click="caigou(scope.$index,scope.row)">采购</el-button>
      </template>
    </el-table-column>

  </el-table>

</template>
<script>
import axios from "axios"

export default {
  name: 'jslist',
  data() {
    return {
      tableData: [{
        isbn: '456789',
        cgTotal: '8',
      }],
      testData: [{
        isbn: '',
        cgTotal: ''
      }],
      caigouData:[]
    }
  },
  methods: {
    changedMatNum(index, row, even) {
      console.log('-------数量------');
      console.log("index：" + index);
      console.log("even：" + even);
      this.tableData[index].cgNumber = even;
    },


    caigou(index, row) {

      const that = this;
      this.caigouData=[{
        "cgNumber":that.tableData[index].cgNumber,
        "isbn":that.tableData[index].isbn,
        "jsId":that.tableData[index].jsId
      }];
      console.log(this.caigouData);
      axios({
        method:'post',
        url:'/api/cgMessager/purchase',
        headers:{
          'Content-Type': 'application/json' //传递数据为json时必须加上,否则服务器不识别报415
        },
        data:that.caigouData
      }).then(function (response){
        console.log(response);
      })
      alert('采购成功')
    }
  },

  created() {
    console.log(sessionStorage);
    const that = this;
    axios({
      method: 'get',
      url: 'api/cgMessager/getJsList',
    }).then(function (response) {
      let list = eval(response.data);
      console.log(list.data);
      that.tableData = list.data;

      for(let i=0;i<that.tableData.length;i++){
        if(that.tableData[i].cgFlag==1)
          delete that.tableData[i];

      }
      console.log(that.tableData);
    })
  }
}

</script>


<style scoped>

</style>