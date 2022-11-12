import Vue from 'vue'
import VueRouter from 'vue-router'

// import News from '@/components/PostNews'    /*後ほど作成するファイルです*/
// import About from '@/components/PostAbout' /*後ほど作成するファイルです*/

// Vue.use(VueRouter)

// const routes = [
//   { path: '/news', component: News },
//   { path: '/about', component: About }
// ]
// const router = new VueRouter({
//   mode: 'history',
//   routes
// })
// export default router


import HomePage from '@/views/Home.vue'
import MyProfile  from '@/components/Profile'    /*後ほど作成するファイルです*/
import MyWorks from '@/components/Works' /*後ほど作成するファイルです*/
import ContactForm from '@/components/Contact' /*後ほど作成するファイルです*/


Vue.use(VueRouter)

const routes = [
  // { path: '/home', component: HomePage },
  { path: '/', component: HomePage },
  { path: '/profile', component: MyProfile },
  { path: '/works', component: MyWorks },
  { path: '/contact', component: ContactForm }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router