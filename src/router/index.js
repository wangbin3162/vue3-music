import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: 'Recommend'
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: () => import(/* webpackChunkName: "recommend" */ '../views/recommend.vue')
  },
  {
    path: '/singer',
    name: 'Singer',
    component: () => import(/* webpackChunkName: "singer" */ '../views/singer.vue'),
    children: [
      {
        path: ':id',
        component: () => import(/* webpackChunkName: "singer" */ '../views/singer-detail.vue')
      }
    ]
  },
  {
    path: '/top-list',
    name: 'TopList',
    component: () => import(/* webpackChunkName: "top-list" */ '../views/top-list.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/search.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
