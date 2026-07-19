import { setActivePinia, createPinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useMediaStore } from './store'

describe('media store', () => {
  beforeEach(() => setActivePinia(createPinia()))
  it('toggles a programme in the watchlist', () => { const store = useMediaStore(); store.toggleWatchlist(1); expect(store.watchlist).toContain(1); store.toggleWatchlist(1); expect(store.watchlist).not.toContain(1) })
  it('creates a publishing draft', () => { const store = useMediaStore(); store.publish('New Europe', 'Series'); expect(store.published[0].status).toBe('Draft') })
})
