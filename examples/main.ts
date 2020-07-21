import { createApp } from 'vue'
import Demo from './demo/index.vue'
import SwipeCell from '../packages/index'
const app = createApp(Demo as any)
app.use(SwipeCell)
app.mount('#app')
