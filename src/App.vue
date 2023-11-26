<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div id="app">
    <Navbar><!-- 导航组件 --></Navbar>
    <div id="wrapper">
        <Sidebar><!-- 侧边栏组件 --></Sidebar>
        <div id="content-wrapper">
          <router-view /> <!-- 匹配的路由组件将被渲染到这里 -->
        </div>
    </div>
</div>
</template>

<style scoped>

</style>
