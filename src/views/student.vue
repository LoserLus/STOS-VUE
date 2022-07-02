<template>
  <div class="common-layout">
    <el-container>
      <el-header>学生</el-header>
      <el-container>
        <el-aside >
          <div>
            <a href="http://localhost:8080/#/student">选书</a>
          </div>



        </el-aside>
        <el-main>
          <el-table :data="tableData">
            <el-table-column type="selection" width="55" />
            <el-table-column prop="isbn" label="书号"  />
            <el-table-column prop="book_name" label="书名"  />
            <el-table-column prop="author" label="作者"  />
            <el-table-column prop="publish" label="出版社"  />
            <el-table-column prop="price" label="单价"  />
            <el-table-column label="数量">
              <el-input v-model="input" placeholder="请输入您要购买的数量" />
            </el-table-column>



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
    isbn:'456789',
    book_name:'高等数学',
    author:'数学老师',
    publish:'山东出版社',
    price:'10'

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