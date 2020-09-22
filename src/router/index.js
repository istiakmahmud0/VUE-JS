import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PostDetails from '../views/PostDetails.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)


const routes = [


  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/post-details/:id',
    name: 'PostDetails',
    component: PostDetails
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  },
  // mode : "history",

]

const router = new VueRouter({
  routes
})

export default router