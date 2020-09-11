import { createApp } from 'vue'
import Demo from './demo/index.vue'
import SwipeCell from '../packages/index'
const app = createApp(Demo)
app.use(SwipeCell)
app.mount('#app')
