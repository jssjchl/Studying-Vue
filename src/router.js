import { createWebHistory, createRouter } from 'vue-router'
import Home from '/@components/HelloWorld.vue'
import Contact from '/@components/Contact.vue'
import Basic from '/@components/Basic.vue'
import Ex from '/@components/ex.vue'
import Ex2 from '/@components/ex2.vue'
import ClassBinding from '/@components/ClassBinding.vue'
import List from '/@components/ListEx.vue'
import RenederingGrammer from '/@components/RenderingGrammer.vue'
import AxiosEX from '/@components/AxiosEx.vue'
const routes = [
  {
    path: '/axiosEx',
    name: 'AxiosEX',
    component: AxiosEX,
  },
  {
    path: '/rendering',
    name: 'RenederingGrammer',
    component: RenederingGrammer,
  },
  {
    path: '/classBinding',
    name: 'ClassBinding',
    component: ClassBinding,
  },
  {
    path: '/list',
    name: 'List',
    component: List,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Ex',
    name: 'Ex',
    component: Ex,
  },
  {
    path: '/Ex2',
    name: 'Ex2',
    component: Ex2,
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('/@components/Test.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/basic',
    name: 'Basic',
    component: Basic,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
