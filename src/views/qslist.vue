<template>
<div class="qslist">
  <el-table
      ref="multipleTableRef"
      :data="tableData.filter(data => !search || data.qs_id.toLowerCase().includes(search.toLowerCase())
      ||data.book_name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
      height="470"
      @selection-change="changeData"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column property="qs_id" label="缺书单号" width="250"/>
    <el-table-column property="isbn" label="ISBN" width="300" />
    <el-table-column property="book_name" label="书名" width="280" />
    <el-table-column property="qs_total" label="数量" width="230" />
    <el-table-column property="qs_username" label="经办人" width="200" />
    <el-table-column align="left" width="330">
      <template #header>
        <el-input
            v-model="search"
            size="mini"
            placeholder=""/>
      </template>
    </el-table-column>

  </el-table>
  <div class='button_div' >
    <el-button @click="saleBook()">采购</el-button>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "qslist",
  data() {
    return {
      tableData: [{
        qs_id:'QS001',
        isbn: '9787521737035',
        book_name: '《中国美术五千年》',
        qs_total: '50',
        qs_username:'xiao'

      },
        { qs_id:'QS002',
        isbn: '9787572606649',
        book_name: '《花与药》',
        qs_total: '20',
        qs_username:'xiao'},
    { qs_id:'QS003',
        isbn: '9787572606649',
        book_name: '《花与药》',
        qs_total: '10',
        qs_username:'xiao'}
      ],

      search: '',
      selectData:[],
    }

  },

methods:{
  saleBook(){
    let _this=this;
    /*这里是发送请求
    * salebook 是后端controller 的请求URL
    * post 请求
    * 需要有 书籍实体类
    *
    * */
    axios.post("http://localhost:8181/salebook",_this.selectData).then(res=>{
    if (res.code==200){
      for (let i =0;i<this.tableData.length;i++){
        for (let j =0;j<this.selectData.length;j++){
          if (this.tableData[i]==this.selectData[j]){
            this.tableData.splice(i,1);
          }
        }
      }
    }
    })


  },
  changeData(val){
    console.log(val);
    this.selectData=val;
  }
}
}
</script>

<style scoped>
.button_div{
margin-top: 5px;
margin-left:1600px;
}
</style>