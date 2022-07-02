<template>
  <div class="common-layout">
    <el-container>
      <el-header>采购人员</el-header>
      <el-container>
        <el-aside >
          <div>
            <a href="http://localhost:8080/buyer.vue#/buyer">缺书单</a>
          </div>
          <div>
            <a href="http://localhost:8080/buyer.vue#/buyer">进书单</a>
          </div>


        </el-aside>
        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="qs_id" label="缺书单号"  />
            <el-table-column prop="isbn" label="书号"  />
            <el-table-column prop="qs_total" label="总数"  />
            <el-table-column prop="qs_username" label="经办人"  />


          </el-table>
          <el-pagination
              :page-size="20"
              :pager-count="20"
              layout="prev, pager, next"
              :total="1000"
          />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
const tableData = [
  {
    qs_id:'001',
    isbn:'456789',
    qs_total:'10',
    qs_username:'小王'

  },

]

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-header{
  background-color: #409EFF;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 3%;

}

.el-aside{
  width:20%;
  background-color: #79bbff;
  margin-left: 10%;
  height: 700px;
}
.el-main{
  background-color:  #a0cfff;
  margin-right: 10%;
}
.el-table{
  height: 94%;
  width: 100%;
  background-color:  #ecf5ff;
}

</style>