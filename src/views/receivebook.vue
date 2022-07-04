<template>
  <div class="receive">
    <el-table
        ref="multipleTableRef"
        :data="tableData.filter(data => !search || data.qs_id.toLowerCase().includes(search.toLowerCase())
      ||data.book_name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
        height="460"

    >
      <el-table-column type="selection" width="55" />
      <el-table-column property="qs_id" label="缺书单号" width="180"/>
      <el-table-column property="isbn" label="ISBN" width="220" />
      <el-table-column property="book_name" label="书名" width="220" />
      <el-table-column property="qs_total" label="数量" width="160" />
      <el-table-column property="qs_username" label="经办人" width="160" />
      <el-table-column align="left" width="285">
        <template #header>
          <el-input
              v-model="search"
              size="mini"
              placeholder=""/>
        </template>
      </el-table-column>

    </el-table>
    <div class='button_div' >
      <el-button @click="fun()">采购</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "receivebook",
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
          qs_username:'xiao'}
      ],
      search: ''
    }

  },

  fun(){

  }
}
</script>

<style scoped>
.button_div{
  margin-top: 10px;
  margin-left:1200px;
}
</style>