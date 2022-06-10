import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import mixins from './mixins';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
//외부 라이브러리를 전역으로 사용하기 위해서는 main.js에다가 import해주고

const app = createApp(App)
app.use(router)
app.mixin(mixins)
app.use(VueSweetalert2)
//import받은 라이브러리를 app.use에 사용함을 알린다.
app.mount('#app')
