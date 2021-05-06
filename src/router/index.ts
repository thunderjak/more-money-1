import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '@/views/money.vue'
import Labels from '@/views/labels.vue'
import EditLabel from '@/views/editlabel.vue'
import Statistics from '@/views/statistics.vue'
import NotFound from '@/views/notfound.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path:'/',
    redirect:'/money' //重定向money
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/labels/edit',
    component: EditLabel
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path:'*', //路由从上到下的顺序进行匹配
    component:NotFound //404页面写在最后面
  }
]

const router = new VueRouter({
  routes
})

export default router
