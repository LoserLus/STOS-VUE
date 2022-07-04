<template>
  <div class="dglist_class">
    <el-table
        :data="tableData.filter(data => !search || data.dgzUsername.toLowerCase().includes(search.toLowerCase())
        || data.bookName.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
        height="510"
        max-height="600">
      <el-table-column
          width="120"
          label="订购单号"
          prop="dgId">
      </el-table-column>
      <el-table-column
          width="120"
          label="订购者账号"
          prop="dgzUsername">
      </el-table-column>
      <el-table-column
          width="150"
          label="书号"
          prop="isbn">
      </el-table-column>
      <el-table-column
          width="150"
          label="书名"
          prop="bookName">
      </el-table-column>
      <el-table-column
          width="160"
          label="订购日期"
          prop="dgDate">
      </el-table-column>
      <el-table-column
          width="100"
          label="订购总数"
          prop="dgTotal">
      </el-table-column>
      <el-table-column
          width="100"
          label="当前库存"
          prop="stock">
      </el-table-column>
      <el-table-column
          width="100"
          label="总额"
          prop="dgAmount">
      </el-table-column>
      <el-table-column
          align="center"
      >
        <template #header>
          <el-input
              v-model="search"
              size="mini"
              placeholder=""/>
        </template>
        <template #default="scope">
          <el-button size="mini" @click="provide(scope.$index, scope.row)">发放</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name:"dglist",
  data() {
    return {
      tableData: [{
        dgId:'',
        dgzUsername:'',
        isbn:'',
        bookName:'',
        dgDate:'',
        dgTotal:'',
        stock:'',
        dgAmount:''
      }],
      search: ''
    }
  },
  methods: {
    //将发放的书籍信息发送给后端
    provide(index, row) {
      console.log(index, row);
      if(this.tableData[index].dgAmount<=this.tableData[index].stock){
        axios.get('http://127.0.0.1:8181/messager/release/',
            {
              params:{
                'bookName':this.tableData[index].bookName,
                'dgAmount':this.tableData[index].dgAmount,
                'dgDate':this.tableData[index].dgDate,
                'dgId':this.tableData[index].dgId,
                'dgTotal':this.tableData[index].dgTotal,
                'dgzUsername':this.tableData[index].dgzUsername,
                'isbn':this.tableData[index].isbn
              },
            }
        ).then((res) => {
          console.log(res)
        })
      }else{
        alert("库存不足，请补充库存！");
      }
    }

  },
  //获取订购单信息
  created() {
    const that = this;

    axios({
      method: 'get',
      url: 'http://127.0.0.1:8181/messager/dglist/',
    }).then(function (response) {
      var list = eval(response.data);
     //console.log(response.data);
     //console.log(list.data);
      that.tableData = list.data;

      //格式化日期
      for (let i=0; i<that.tableData.length; i++)
      {
        for(let j=0;j< that.tableData[i].dgDate.length;j++){
          if( that.tableData[i].dgDate[j]<10)
            that.tableData[i].dgDate[j]='0'+that.tableData[i].dgDate[j];
        }
        that.tableData[i].dgDate=that.tableData[i].dgDate[0]+'-'+that.tableData[i].dgDate[1]+'-'+
            that.tableData[i].dgDate[2]+' '+that.tableData[i].dgDate[3]+':'+
            that.tableData[i].dgDate[4]+':'+that.tableData[i].dgDate[5];
      }

    })
  }
}
</script>

<style scoped>

</style>