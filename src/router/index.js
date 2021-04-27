import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: 'Recommend'
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: () => import(/* webpackChunkName: "recommend" */ '../views/recommend/recommend.vue'),
    children: [
      {
        path: ':id',
        component: () => import(/* webpackChunkName: "recommend" */ '../views/recommend/album.vue')
      }
    ]
  },
  {
    path: '/singer',
    name: 'Singer',
    component: () => import(/* webpackChunkName: "singer" */ '../views/singer/singer.vue'),
    children: [
      {
        path: ':id',
        component: () => import(/* webpackChunkName: "singer" */ '../views/singer/singer-detail.vue')
      }
    ]
  },
  {
    path: '/top-list',
    name: 'TopList',
    component: () => import(/* webpackChunkName: "top-list" */ '../views/top-list/top-list.vue'),
    children: [
      {
        path: ':id',
        component: () => import(/* webpackChunkName: "top-list" */ '../views/top-list/top-detail.vue')
      }
    ]
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/search/search.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
