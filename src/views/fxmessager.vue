<template>
  <div class="fxmessager">
    <el-container>
      <el-header>
       图书发行人员管理界面
      </el-header>
      <el-container>
        <el-aside width="200px">
          <NavMenu></NavMenu>
        </el-aside>
        <el-main>
          <router-view></router-view> <!--路由出口 -->
        </el-main>
      </el-container>

      <el-footer>@STOS-发行人员系统</el-footer>
    </el-container>

  </div>

</template>

<script>
import NavMenu from '../views/navmenu';

export default {
  name: "fxmessager",
  components: {
    NavMenu
  },

}
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #FFFFFF;
  color: #333;
  text-align: center;
  height: 55px;
  line-height: 80px;
  padding: 0px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 450px;
}
</style>