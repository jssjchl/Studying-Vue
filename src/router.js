import { createWebHistory, createRouter } from "vue-router";
import Home from '/@components/HelloWorld.vue' 
import Contact from '/@components/Contact.vue' 
import Basic from '/@components/Basic.vue' 
import Ex from '/@components/ex.vue' 
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Ex",
    name: "Ex",
    component: Ex
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("/@components/Test.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/basic",
    name: "Basic",
    component: Basic,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;