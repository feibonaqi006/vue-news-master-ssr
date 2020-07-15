import Vue from 'vue'
import Router from 'vue-router'
import Home from "./pages/Home"
import news_tech from "./pages/news_tech"
import news_sports from "./pages/news_sports"
import news_game from "./pages/news_game"
import hot from "./pages/hot"
import search from "./pages/search"

Vue.use(Router)

export function createRouter () {
  let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      { path: '/', name: 'Index', redirect: '/home' },
      {
        path: '/home', name: 'Home', component: Home,
        children: [
          { path: 'news_tech', name: 'tech', component: news_tech },
          { path: '/home/news_sports', name: 'sports', component: news_sports },
          { path: '/home/news_game', name: 'game', component: news_game },
          { path: '/home/news_hot', name: 'hot', component: hot }
          ]
      },
      { path: '/search', name: 'search', component: search }
    ]

  })

  return router
}
