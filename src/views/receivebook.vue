<template>
  <div class="receive">
    <el-table
        :data="tableData.filter(data => !search || data.isbn.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
        Updated upstream
        height="460"
        max-height="460"
    >
      <el-table-column property="jsId" label="到书编号" width="150"/>
      <el-table-column property="isbn" label="ISBN" width="180" />
      <el-table-column property="cgUsername" label="采购人账号" width="170" />
      <el-table-column property="cgDate" label="采购日期" width="220" />
      <el-table-column property="cgTotal" label="采购总数" width="140" />
      <el-table-column property="cgAmount" label="总额" width="140" />
      <el-table-column align="left" width="220">
        <template #header>
          <el-input
              v-model="search"
              size="mini"
              placeholder=""/>
        </template>
      </el-table-column>

    </el-table>
    <div class='button_div' >
      <el-button type="primary" @click="book()" >确定</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "receivebook",
  data() {
    return {
      tableData: [{
          jsId:'',
          isbn:'',
          cgUsername:'',
          cgDate:'',
          cgTotal:'',
          cgAmount:'',
          cgFlag:''
        }
      ],
      search: ''
    }

  },
  methods:{
    book(){
    const that=this;
      var list=[];

      for(let i=0;i<that.tableData.length;i++){
        if(that.tableData[i]!=null)
          list.push(that.tableData[i].jsId);
      }

      console.log(list);
      axios({
        method: 'post',
        url: '/api/messager/deleteJslist/',
        headers:{
          'Content-Type': 'application/json' //传递数据为json时必须加上,否则服务器不识别报415
        },
        data:JSON.stringify(list) //转换为json对象
      }).then(function (response) {

        if(response.status==200)
          alert("已确定！");
       location.reload();
      })


    }
  },
  //获取进书单信息
  created() {
    const that = this;
    axios({
      method: 'get',
      url: '/api/messager/testOk/',
    }).then(function (response) {
      var list = eval(response.data);
      that.tableData=list.data;
      for (let i=0;i<that.tableData.length;i++){
        //删除未采购的订单
        if(that.tableData[i].cgFlag==0)
          delete that.tableData[i];
      }

    })
  }
}

</script>

<style scoped>
.button_div{
  margin-top: 10px;
  margin-left:1200px;
}
</style>