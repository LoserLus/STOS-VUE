<template>
  <div class="dglist_class">
    <el-table
        :data="tableData.filter(data => !search || data.dgzUsername.toLowerCase().includes(search.toLowerCase())
        || data.bookName.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
        Updated upstream
        height="460"
        max-height="460">

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
              placeholder="根据用户名或书名检索"/>
        </template>
        <template #default="scope">
          <el-button size="mini" @click="provide(scope.$index, scope.row)">发放</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class='button_div' >
      <el-button type="primary"  @click="book()" >补货</el-button>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name:"dglist",
  data() {
    return {
      dgList:{
        dgId:'',
        dgzUsername:'',
        isbn:'',
        bookName:'',
        dgDate:'',
        dgTotal:'',
        stock:'',
        dgAmount:'',
      },
      tableData: [
          this.dgList,
      ],
      search: '',
      fxUsername:'',
    }
  },
  methods: {
    getDgList(){
      axios({
        method: 'get',
        url: '/api/messager/dglist/',
      }).then(response=>{
        console.log(response)
        this.tableData = response.data.data;
      })
    },
    //将发放的书籍信息发送给后端
    provide(index, row) {
      const that=this;
      // var dgData= {
      //     "bookName": that.tableData[index].bookName,
      //     "dgAmount": that.tableData[index].dgAmount,
      //     "dgId": that.tableData[index].dgId,
      //     "dgTotal": that.tableData[index].dgTotal,
      //     "dgzUsername": that.tableData[index].dgzUsername,
      //     "fxUsername": that.fxUsername,
      //     "isbn": that.tableData[index].isbn,
      //     "stock": that.tableData[index].stock
      //   };

      if(row.dgTotal<=row.stock){
        //要发送的值
        let dgData = row;
        dgData.fxUsername='';//username由后台根据cookie自动补充
        axios({
          method: 'post',
          url: '/api/messager/release/',
          headers:{
            'Content-Type': 'application/json' //传递数据为json时必须加上,否则服务器不识别报415
          },
          data:JSON.stringify(dgData) //转换为json对象
        }).then(response=>{
          console.log(response.status);
          if(response.status==200)
            alert("发放成功！");
            this.getDgList();
        })

      }else{
        alert("库存不足，请补充库存！");
      }
    },
    book(){
      //有订单满足可以发放的要求，要先发
      for(let i=0;i<this.tableData.length;i++){
        if(this.tableData[i].dgAmount<=this.tableData[i].stock){
          alert("有可发放的订单，请先发放！");
          return;
        }
      }
      //剩下的都是库存不足需要补货的，发到缺书单
      let list=[{}];
      for(let i=0;i<this.tableData.length;i++){
        list[i]={
          'isbn':this.tableData[i].isbn,
          'qsTotal':this.tableData[i].dgTotal-this.tableData[i].stock,
          'dgId':this.tableData[i].dgId,
        };
      }

      axios({
        method: 'post',
        url: '/api/messager/sendLockB/',
        headers:{
          'Content-Type': 'application/json' //传递数据为json时必须加上,否则服务器不识别报415
        },
        data:JSON.stringify(list) //转换为json对象
      }).then(response=> {
        console.log(response.status);
        if(response.status==200)
          alert("已发送补货信息！");
        this.getDgList();
        //location.reload();
      })
    }
  },
  //获取订购单信息
  created() {
    //this.fxUsername=sessionStorage.getItem('username');
    axios({
      method: 'get',
      url: '/api/messager/dglist/',
    }).then(response=> {
      console.log(response);
      this.tableData=response.data.data;
    })
  }
}
</script>

<style scoped>
.button_div{
  margin-top: 15px;
  margin-left:1200px;
}
</style>