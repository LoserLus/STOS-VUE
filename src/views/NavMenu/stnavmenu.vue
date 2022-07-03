<template>
  <!--导航菜单组件-->
  <div class="stnavMenu">
    <el-menu :default-active="$route.path" class="el-menu-fx" @select="handleSelect" router>
      <el-sub-menu index="1">
        <template #title>业务处理</template>
        <el-menu-item index="/student/book">订购业务</el-menu-item>
        <el-menu-item index="/student/getbook">领书历史</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "stnavmenu",
  methods: {

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
}
</script>

<style scoped>

</style>