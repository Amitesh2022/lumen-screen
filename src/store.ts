import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export type Programme = { id: number; title: string; genre: string; year: number; duration: string; progress: number; tone: string; featured?: boolean }
export const useMediaStore = defineStore('media', () => {
  const programmes = ref<Programme[]>([
    { id: 1, title: 'Brussels After Rain', genre: 'Documentary', year: 2026, duration: '52 min', progress: 0, tone: 'violet', featured: true },
    { id: 2, title: 'The Quiet Algorithm', genre: 'Thriller', year: 2026, duration: '8 episodes', progress: 62, tone: 'amber' },
    { id: 3, title: 'Common Ground', genre: 'Drama', year: 2025, duration: '1h 48m', progress: 0, tone: 'green' },
    { id: 4, title: 'Kitchen Stories: Europe', genre: 'Lifestyle', year: 2026, duration: '10 episodes', progress: 28, tone: 'coral' },
    { id: 5, title: 'Signals from the North', genre: 'Science', year: 2025, duration: '44 min', progress: 0, tone: 'blue' },
    { id: 6, title: 'Parallel Lines', genre: 'Drama', year: 2026, duration: '6 episodes', progress: 81, tone: 'rose' },
  ])
  const watchlist = ref<number[]>([2, 5])
  const published = ref<{ title: string; format: string; status: string }[]>([{ title: 'City Makers', format: 'Series', status: 'In review' }])
  const watchlistItems = computed(() => programmes.value.filter((p) => watchlist.value.includes(p.id)))
  const toggleWatchlist = (id: number) => { watchlist.value = watchlist.value.includes(id) ? watchlist.value.filter((item) => item !== id) : [...watchlist.value, id] }
  const publish = (title: string, format: string) => published.value.unshift({ title, format, status: 'Draft' })
  return { programmes, watchlist, watchlistItems, published, toggleWatchlist, publish }
})
