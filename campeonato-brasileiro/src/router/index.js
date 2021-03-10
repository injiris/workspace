import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import ClubesLista from '../views/ClubesLista'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/classificação',
    name: 'ClubesLista',
    component: ClubesLista
  }
]

const router = new VueRouter({
  routes
})

export default router
