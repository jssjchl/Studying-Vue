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
import EventEX from '/@components/EventEx.vue'
import ComputedEx from '/@components/ComputedEx.vue'
import WatchEx from '/@components/WatchEx.vue'
import Search from '/@components/Search.vue'
import Save from '/@components/Save.vue'
import Server from '/@components/Server.vue'
const routes = [
  {
    path: '/save',
    name: 'Save',
    component: Save,
  },
  {
    path: '/server',
    name: 'Server',
    component: Server,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/watchEx',
    name: 'watchEx',
    component: WatchEx,
  },
  {
    path: '/computedEx',
    name: 'ComputedEx',
    component: ComputedEx,
  },
  {
    path: '/eventEx',
    name: 'EventEX',
    component: EventEX,
  },
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
