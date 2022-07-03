<template>
  <!--导航菜单组件-->
  <div class="navMenu">
    <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal"  @select="handleSelect" router >

      <el-submenu index="1">
        <el-menu-item index="/fxmessager/qslist">缺书单</el-menu-item>
      </el-submenu>

      <el-submenu index="2">
        <el-menu-item index="/fxmessager/dglist">领书单</el-menu-item>
      </el-submenu>

    </el-menu>

  </div>
</template>

<script>
export default {
  name: "navmenu",
  methods: {

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
}
</script>

<style scoped>

</style>