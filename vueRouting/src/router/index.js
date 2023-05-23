import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Exploreview from '../components/Explore.vue'
import InstaHome from '../components/Home.vue'
import Reactive from '../views/Reactive.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/instagram',
      name: 'instagram',
      component: () => import('../views/AboutView.vue'),
      children:[
        {
          path:"",
          name:"InstaHome",
          component: InstaHome
        },
        {
          path:"explore",
          name:"explore",
          component:Exploreview
        }
      ],
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path:"/reactive",
      name:"Reactive",
      component:Reactive
    }
  ]
})

export default router
