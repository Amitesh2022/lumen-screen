import { createRouter, createWebHistory } from 'vue-router'
import DiscoverView from './views/DiscoverView.vue'
import WatchlistView from './views/WatchlistView.vue'
import StudioView from './views/StudioView.vue'

export const router = createRouter({ history: createWebHistory(), routes: [
  { path: '/', component: DiscoverView },
  { path: '/watchlist', component: WatchlistView },
  { path: '/studio', component: StudioView },
] })
