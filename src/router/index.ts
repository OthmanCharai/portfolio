import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/home/Home.vue';
import AboutView from "../views/about/About.vue";
import ResumeView from "../views/resume/Resume.vue";
import ContactView from "../views/contact/Contact.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: "/about",
    name: "About",
    component: AboutView
  },
  {
    path:"/resume",
    name:"Resume",
    component:ResumeView
  },
  {
    path:"/contact",
    name:"Contact",
    component:ContactView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
