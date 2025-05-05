<template>
  <div class="not-found-container">
    <h1 class="title-404">404 页面未找到</h1>

    <div class="url-display">
      <span class="tip-text">你访问的路径：</span>
      <el-tag type="danger" class="bad-url">
        {{ fullErrorUrl }}
      </el-tag>
    </div>

    <el-button
        type="primary"
        @click="Home"
        class="home-button"
    >
      返回首页
    </el-button>
  </div>
</template>

<script setup>
import { ElMessage, ElTag } from "element-plus"
import { useRoute, useRouter } from "vue-router"
import { computed, onMounted } from 'vue'

const route = useRoute()
const router = useRouter()

// 获取错误路径
const errorPath = computed(() => {
  // 处理通配符路由参数
  if (route.params.pathMatch) {
    const path = route.params.pathMatch
    return Array.isArray(path) ? `/${path.join('/')}` : `/${path}`
  }
  return window.location.pathname
})

// 显示完整URL（包含域名）
const fullErrorUrl = computed(() => {
  return `${window.location.origin}${errorPath.value}`
})

// 显示错误提示
onMounted(() => {
  ElMessage.error({
    message: `访问路径 ${errorPath.value} 不存在`,
    duration: 5000
  })
})

const Home = () => {
  router.push('/')
}
</script>

<style scoped>
.not-found-container {
  text-align: center;
  padding: 40px;
  max-width: 800px;
  margin: 50px auto 0;
}

.title-404 {
  color: #f56c6c;
  font-size: 2.5em;
  margin-bottom: 30px;
}

.url-display {
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.tip-text {
  font-size: 16px;
  color: #606266;
}

.bad-url {
  font-family: monospace;
  font-size: 16px;
  max-width: 500px;
  word-break: break-all;
}

.home-button {
  margin-top: 30px;
  padding: 12px 36px;
  font-size: 16px;
}
</style>