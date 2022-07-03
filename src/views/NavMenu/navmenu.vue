<template>
  <!--导航菜单组件-->
  <div class="navMenu">
    <el-menu :default-active="$route.path" class="el-menu-fx" @select="handleSelect" router>
      <el-sub-menu index="1">
        <template #title>业务处理</template>
        <el-menu-item index="/fxmessager/dglist">订书业务</el-menu-item>
        <el-menu-item index="/fxmessager/qslist">缺书业务</el-menu-item>
        <el-menu-item index="/fxmessager/receivebook">到书信息</el-menu-item>
      </el-sub-menu>
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