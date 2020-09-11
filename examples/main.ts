import { createApp } from 'vue'
import Demo from './demo/index.vue'
import SwipeCell from '@col0ring/swipe-cell'
const app = createApp(Demo)
app.use(SwipeCell)
app.mount('#app')
