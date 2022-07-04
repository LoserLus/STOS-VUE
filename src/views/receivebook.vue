<template>
  <div class="receive">
    <el-table
        ref="multipleTableRef"
        :data="tableData.filter(data => !search || data.qs_id.toLowerCase().includes(search.toLowerCase())
      ||data.book_name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
        height="460"
        @select="selectCall"
    >
      <el-table-column type="selection" width="55" />
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
      <el-button @click="book()">发放</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "receivebook",
  data() {
    return {
      tableData: [{
        jsId:'JS001',
        isbn:'9787521737035',
        cgUsername:'CG001',
        cgDate:'2022-06-02 15:22:49',
        cgTotal:'50',
        cgAmount:'5000',
        cgFlag:''

      },
        {
          jsId:'',
          isbn:'',
          cgUsername:'',
          cgDate:'',
          cgTotal:'',
          cgAmount:'',
          cgFlag:''
        }
      ],
      search: '',
      indexArray:[],
    }

  },
  methods:{
    book(){
      alert("成功发放书籍！");
    },
    selectCall(selection,row){
      this.indexArray=row;
      console.log(row);
    }
  },

}

</script>

<style scoped>
.button_div{
  margin-top: 10px;
  margin-left:1200px;
}
</style>