import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
            imports: ['vue', 'vue-router'], // 自动导入 Vue 相关 API
            dts: 'src/auto-imports.d.ts' // 生成类型声明文件
        }),
        Components({
            resolvers: [
                ElementPlusResolver({
                    importStyle: 'sass' // 必须与 CSS 预处理器匹配
                })
            ],
            dts: 'src/components.d.ts' // 生成组件类型声明
        })
    ],
})
