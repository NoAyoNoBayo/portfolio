import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ToolsView from '../views/ToolsView.vue'
import AboutView from '../views/AboutView.vue'
import ResumeView from '../views/ResumeView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    },
    {
      path: '/tools',
      name: 'tools',
      component: ToolsView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView
    },
  ]
})

export default router
