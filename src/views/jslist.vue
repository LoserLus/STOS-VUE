<template>
  
  <el-table
      :data="tableData"
  >
    <el-table-column prop="isbn" label="书号"/>
    <el-table-column prop="qs_total" label="总数"/>
      <el-table-column label="采购数量" align="center" >
        <template inline-template v-slot="scope">
          <el-input-number v-model="scope.row.dgTotal" :min="0" :max="999"
                           @change="changedMatNum(scope.$index,scope.row,$event)"
                           placeholder="请输入数量">
          </el-input-number>
        </template>
      </el-table-column>

    <el-table-column prop="buybutton" label="操作">
      <el-button>采购</el-button>
    </el-table-column>

  </el-table>

</template>
<script>
export default {
  name:'jslist',
  data(){
    return {
      tableData: [{
        isbn: '456789',
        qs_total:'8',
        dgTotal: '1'
      }]
    }
  },
  methods:{
    changedMatNum(index,row,even){
      console.log('-------数量------');
      console.log("index：" + index);
      console.log("even：" + even);
      this.tableData[index].number=even;
      // console.log(even.currentTarget.nextElementSibling);
    }
  }
}

</script>


<style scoped>

</style>