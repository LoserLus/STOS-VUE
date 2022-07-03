<template>
<div class="qslist">
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop="isbn"
        label="ISBN"
        width="400">
    </el-table-column>
    <el-table-column
        prop="total"
        label="总数"
        width="400">
    </el-table-column>
    <el-table-column
        prop="username"
        label="经办人">
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  name: "qslist",
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style scoped>

</style>