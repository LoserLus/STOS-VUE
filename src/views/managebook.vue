<template>
  <div class="mangebook">
    <el-table
        :data="books.filter(data => !search || data.bookName.toLowerCase().includes(search.toLowerCase())
        || data.bookName.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
        Updated upstream
        height="460"
        max-height="460"
    >
      <el-table-column property="isbn" label="ISBN" width="180"/>
      <el-table-column property="bookName" label="书名" width="180" />
      <el-table-column property="author" label="作者" width="170" />
      <el-table-column property="publish" label="出版社" width="220" />
      <el-table-column property="price" label="价格" width="140" />
      <el-table-column label="操作" width="150">
        <template #default="scope">
        <el-button type="primary" @click="editHandle(scope.row)">
          <el-icon style="vertical-align: middle">
            <Edit />
          </el-icon>
        </el-button>
        <el-button type="primary" @click="deleteBook(scope.row)">
          <el-icon style="vertical-align: middle">
            <Delete />
          </el-icon>
        </el-button>
        </template>
      </el-table-column>
      <el-table-column width="180">
        <template #header >
          <el-button type="primary" @click="addHandle">
            <el-icon style="vertical-align: middle">
              <Plus />
            </el-icon>
            <span>
              新增图书
            </span>
          </el-button>
        </template>
      </el-table-column>
      <el-table-column>
        <template #header>
          <el-input
              v-model="search"
              size="mini"
              placeholder="搜索图书"/>
        </template>
      </el-table-column>

    </el-table>
  </div>
  <div class="formDialog">
    <el-dialog v-model="showForm" title="编辑图书信息">
      <el-form :model="formData">
        <el-form-item label="ISBN">
          <el-input v-model="formData.isbn"/>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="formData.author"/>
        </el-form-item>
        <el-form-item label="书名">
          <el-input v-model="formData.bookName"/>
        </el-form-item>
        <el-form-item label="出版社">
          <el-input v-model="formData.publish"/>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="formData.price"/>
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="showForm = false">Cancel</el-button>
        <el-button type="primary" @click="flag=='edit'?editBook(formData):addBook(formData)"
        >Confirm</el-button
        >
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import {Plus} from "@element-plus/icons";
export default {
  name: "mangebook",
  components: {Plus},
  data() {
    return {
      //前后端的对象字段名保持一致
      book:{
        isbn: '',
        bookName: '',
        author: '',
        publish: '',
        price: '',
      },
      books:'',
      search:'',
      showForm:false,
      formData:'',
      flag:'',//用于判断当前是增加图书,还是修改图书
      // filterTableData:''
    }
  },
  created() {
    axios({
      method:'get',
      url:'/api/messager/getBookList',
    }).then(response=>{
      this.books = response.data.data;
      //console.log(response)
    });
  },
  // computed: {
  //
  //   filterTableData:function(){
  //     return
  //         this.books.filter(
  //             (data) =>
  //                 !search.value ||
  //                 data.bookName.toLowerCase().includes(search.value.toLowerCase())
  //         );
  //   }
  // },
  methods:{
    getBookList(){
      axios({
        method:'get',
        url:'/api/messager/getBookList',
      }).then(response=>{
        this.books = response.data.data;
        //console.log(response)
      })
    },
    addHandle()
    {
      this.formData=this.book;
      this.flag='add';
      this.showForm=true;

    },
    editHandle(row)
    {
      this.formData=row;
      this.flag='edit';
      this.showForm=true;

    },
    addBook(newBook)
    {

      // console.log(JSON.stringify(newBook))
      axios({
        method:'post',
        url:'api/messager/addBook',
        data:JSON.stringify(newBook),
        headers:{
          'Content-Type': 'application/json' //传递数据为json时必须加上,否则服务器不识别报415
        },
      }).then(reponse=>{
        alert(reponse.data.data);
        this.getBookList();
        this.showForm=false;
      })
    },
    editBook(newBook)
    {

      // console.log(JSON.stringify(newBook))
        axios({
          method:'put',
          url:'api/messager/updateBook',
          data:JSON.stringify(newBook),
          headers:{
            'Content-Type': 'application/json' //传递数据为json时必须加上,否则服务器不识别报415
          },
        }).then(reponse=>{
          alert(reponse.data.data);
          this.getBookList();
          this.showForm=false;
        })
    },
      deleteBook(row){
      //console.log(row);
        //console.log(data);
        axios({
          method:'delete',
          url:'/api/messager/deleteBook',
          params:{
            isbn:row.isbn
          }
        }).then(response=>{
          //this.books = response.data.data;
          alert(response.data.data);
          this.getBookList();
        });
      }
  }
}
</script>

<style scoped>

</style>