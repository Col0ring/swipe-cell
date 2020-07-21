import { Plugin } from 'vue'
import SwipeCell from './index.vue'

export { SwipeCell }
export default {
  install: (app, options) => {
    app.component(options?.name || 'SwipeCell', SwipeCell as any)
  }
} as Plugin
