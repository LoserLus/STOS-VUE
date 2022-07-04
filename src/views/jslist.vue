<template>
  <p>进书单</p>
  <el-table
      :data="tableData"
  >
    <el-table-column prop="isbn" label="书号"  />
    <el-table-column prop="qs_total" label="总数"  />
    <el-table-column prop="buybutton" label="是否已采购">

    </el-table-column>



  </el-table>
  <el-button @click="buySome = true " >已采购</el-button>
  <el-dialog v-model="buySome" title="请输入已购数量">
    <el-form :model="form">
      <el-form-item label="已购数量" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="buySome = false">取消</el-button>
        <el-button type="primary" @click="buySome = false">确定</el-button>
      </span>
    </template>
  </el-dialog>


</template>
<script script lang="ts" setup>
import { reactive, ref } from 'vue'
const buySome = ref(false)

const formLabelWidth = '140px'
//
// export default {
//   name:"jslist",
//   data(){
//     return{
//       tableData:[
//         {
//           isbn:'159357',
//           qs_total:'50'
//         }
//       ]
//
//     }
//   }
// }
//123
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  desc: '',
})



</script>

<style scoped>

</style>