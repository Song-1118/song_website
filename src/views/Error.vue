<template>
  <h1 class="title-404">404 页面未找到</h1>
  <el-button @click="Home" style="justify-content: center; /* 水平居中 */">返回首页</el-button>
  <router-view></router-view>
</template>

<script setup>
  import {ElMessage} from "element-plus";
  import {useRouter} from "vue-router";

  const router = useRouter()

  ElMessage.error("页面未找到")
  const Home = () => {
    router.push('/')
  }
</script>

<style scoped>

</style>