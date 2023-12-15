import { createApp } from 'vue'
import './output.css'
import App from './App.vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
const app = createApp(App)
app.use(autoAnimatePlugin)
    .mount('body')
// import { createApp } from 'vue'
// import App from 'App.vue'

// createApp(App).use(autoAnimatePlugin).mount('#app')
