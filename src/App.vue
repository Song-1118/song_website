<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
  >
    <el-menu-item index="1" @click="goWeb('home')">首页</el-menu-item>
    <el-menu-item index="2" @click="goWeb('web')">网站导航</el-menu-item>
    <el-menu-item index="3" @click="goWeb('download')">资源下载</el-menu-item>
  </el-menu>
  <router-view></router-view>
</template>

<script lang="ts" setup>
// 导入
import {ref} from 'vue'
import {useRoute} from "vue-router";
import {useRouter} from "vue-router";

// 数据
const activeIndex = ref('1')
const activeIndex2 = ref('1')
const router = useRouter()
const route = useRoute()

// 方法
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const goWeb = (ref="error") => {
  try{
    const website = {
      "home": "/",
      "web": "/web",
      "download": "/download",
      "error": "/error"
    }
    console.log(website[ref])
    router.push(website[ref])
  }
  catch (e){
    router.push("/error")
  }
}

</script>