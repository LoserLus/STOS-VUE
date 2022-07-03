<template>
  <div class="common-layout">
    <el-container>
      <el-header>学生
      </el-header>
      <el-container>
        <el-aside>
          <div>
            <a href="http://localhost:8080/#/student">选书</a>
          </div>

        </el-aside>
        <el-main>
          <el-table ref="multipleTableRef"
                    :data="tableData"
                    @selection-change="SelectionChange"
          >
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>

            <el-table-column prop="isbn" label="书号">
            </el-table-column>
            <el-table-column prop="bookName" label="书名"/>
            <el-table-column prop="author" label="作者"/>
            <el-table-column prop="publish" label="出版社"/>
            <el-table-column prop="price" label="单价"/>

            <el-table-column align="center" label="数量">
              <!--              vue 2.6.0以后版本弃用slot和slot-scope，改用v-slot-->
              <template v-slot:default="prop">
                <el-input
                    v-model="prop.row.value"
                >
                </el-input>
              </template>
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
  <el-form-item>
    <el-button style="width: 100%" @click="getData" type="primary">立即登录</el-button>
  </el-form-item>
</template>

<script>
import axios from "axios";
import {ref} from 'vue';

export default {
  name: 'student',
  data() {
    return {
      tableData: [{
        isbn: '456789',
        bookName: '高等数学',
        author: '数学老师',
        publish: '山东出版社',
        price: '10',
        prop: []
      }]
    }
  },


  methods: {
    getData() {
      console.log(this.tableData);
      console.log(this.row);
    },
    //SelectionChange 用于获取多选数据
    SelectionChange(val) {
      console.log(val.length);
    }
  },
  created() {
    const that = this;

    //const { proxy } = getCurrentInstance();
    axios({
      method: 'get',
      url: 'http://127.0.0.1:8181/user/textlist/',
    }).then(function (data) {
      var list = eval(data.data);
      console.log(list.data);
      that.tableData = list.data;
    })
  }
}
</script>


<style>
.el-header {
  background-color: #409EFF;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 3%;

}

.el-aside {
  width: 20%;
  background-color: #79bbff;
  margin-left: 10%;
  height: 450px;
}

.el-main {
  background-color: #a0cfff;
  margin-right: 10%;
  height: 450px;
}

.el-table {
  height: 94%;
  width: 100%;
  background-color: #ecf5ff;
}

</style>