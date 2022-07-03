<template>
  <div class="dglist_class">
    <el-table
        :data="tableData.filter(data => !search || data.dgz_username.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
        max-height="400">
      <el-table-column
          label="订购单号"
          prop="dg_id">
      </el-table-column>
      <el-table-column
          label="订购者账号"
          prop="dgz_username">
      </el-table-column>
      <el-table-column
          label="书号"
          prop="isbn">
      </el-table-column>
      <el-table-column
          label="订购日期"
          prop="dg_date">
      </el-table-column>
      <el-table-column
          label="订购总数"
          prop="dg_total">
      </el-table-column>
      <el-table-column
          label="当前库存"
          prop="stock">
      </el-table-column>
      <el-table-column
          label="总额"
          prop="dg_amount">
      </el-table-column>
      <el-table-column
          align="center"
      >
        <template #header>
          <el-input
              v-model="search"
              size="mini"
              placeholder="请输入订购者账号"/>
        </template>
        <template #default>
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">发放</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name:"dglist",
  data() {
    return {
      tableData: [{
        dg_id:'DG001',
        dgz_username:'DGZ001',
        isbn:'9787100186438',
        dg_date:'2022-06-01 15:43:57',
        dg_total:'1',
        stock:'560',
        dg_amount:'34'
      },
        {
          dg_id:'DG0012',
          dgz_username:'DGZ002',
          isbn:'9787201077642',
          dg_date:'2022-06-02 15:46:53',
          dg_total:'2',
          stock:'550',
          dg_amount:'40'
        }],
      search: ''
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    }
  },
}
</script>

<style scoped>

</style>