import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LazyPlugin from 'vue3-lazy'
import loadingDirective from '@/components/base/loading/directive'

import '@/assets/stylus/index.styl'

const app = createApp(App)
app.use(store)
  .use(router)
  .use(LazyPlugin, { loading: require('@/assets/images/default.png') })
  .directive('loading', loadingDirective)
  .mount('#app')
