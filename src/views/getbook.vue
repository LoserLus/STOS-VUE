<template>
  <div class="common-layout">

    <el-table ref="multipleTableRef"
              :data="tableData"
              border style="width: 100%"
              height='380'
    >
      <el-table-column prop="lsId" label="领书单号"/>
      <el-table-column prop="dgId" label="订购单号"/>
      <el-table-column prop="lsDate" label="领书日期"/>
      <el-table-column prop="lsUsername" label="经办人"/>
    </el-table>
  </div>
</template>
<script>
import axios from "axios";
import {ref} from 'vue';

export default {
  name: 'getbook',
  data() {
    return {
      tableData: []
    }
  },
  //获取初始页面
  created() {
    console.log(sessionStorage);
    const that = this;
    //const { proxy } = getCurrentInstance();
    axios({
      method: 'get',
      url: '/api/user/getText/',
    }).then(function (response) {
      let list = eval(response.data);
      console.log(list.data);
      that.tableData = list.data;
      console.log(that.tableData);
    })
  }
}
</script>


<style>

.el-header,
.el-footer {
  background-color: #FFFFFF;
  color: #333;
  text-align: center;
  height: 55px;
  line-height: 80px;
  padding: 0px;
}


</style>