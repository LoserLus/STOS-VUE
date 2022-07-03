<template>
  <!--导航菜单组件-->
  <div class="purMenu">
    <el-menu :default-active="$route.path" class="el-menu-fx" @select="handleSelect" router>
      <el-sub-menu index="1">
        <template #title>业务处理</template>
        <el-menu-item index="/purchaser/jslist">进书单</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "purmenu"
}
</script>

<style scoped>

</style>