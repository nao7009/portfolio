// index.js
import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/views/Home.vue'
import MyWorks from '@/components/Works'
import ContactForm from '@/components/Contact'

Vue.use(VueRouter)

const routes = [
  // { path: '/home', component: HomePage },
  { path: '/', component: HomePage },
  { path: '/works', component: MyWorks },
  { path: '/contact', component: ContactForm },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.NODE_ENV === "development" ? process.env.BASE_URL : "/portfolio/",
  // base: "/portfolio/",
  routes
})
export default router