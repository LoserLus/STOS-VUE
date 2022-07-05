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
    <el-table-column property="qsId" label="缺书单号" width="250"/>
    <el-table-column property="isbn" label="ISBN" width="300" />
    <el-table-column property="bookName" label="书名" width="280" />
    <el-table-column property="qsTotal" label="数量" width="230" />
    <el-table-column property="qsUsername" label="经办人" width="200" />
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
import Vue from "vue";

export default {
  name: "qslist",
  data() {
    return {
      tableData: [],

      search: '',
      list:[],
    }

  },
mounted() {
  this.initData();
},
  methods:{
  saleBook(){
    let _this=this;
    /*这里是发送请求
    * salebook 是后端controller 的请求URL
    * post 请求
    * 需要有 书籍实体类
    *  接口在哪  shuju ne
    * */
    axios.post("api/messager/purchase",_this.list).then(res=>{

      if (res.code==200){
      for (let i =0;i<this.tableData.length;i++){
        for (let j =0;j<this.list.length;j++){
          if (this.tableData[i]==this.list[j]){
            this.tableData.splice(i,1);
          }
        }
      }
    }
    })


  },
  changeData(val){

    this.list=val;
    Vue.delete(this.list,'bookName')
    console.log(this.list);
  },
    initData(){
    let _this =this;
    axios.get("api/messager/getLockB").then(res=>{
      _this.tableData=res.data.data;
    })
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