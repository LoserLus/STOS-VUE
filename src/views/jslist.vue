<template>
  
  <el-table
      :data="tableData"
  >
    <el-table-column prop="isbn" label="书号"/>
    <el-table-column prop="qs_total" label="总数"/>
    <el-table-column prop="purNum" label="采购数量">

      <template inline-template v-slot="scope">
        <el-input-number v-model="scope.row.number"
                         @change="c(scope.$index,scope.row,$event)"
        >

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
        qs_total:'8'
      }]
    }
  }
}

</script>


<style scoped>

</style>