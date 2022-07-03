<template>
  <div class="fxmessager">
    <el-container>
      <el-header>
        <NavMenu></NavMenu>
      </el-header>
      <el-main>
        <router-view /> <!--路由出口 -->
      </el-main>
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