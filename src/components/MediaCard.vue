<script setup lang="ts">
import type { Programme } from '../store'
import { useMediaStore } from '../store'
defineProps<{ programme: Programme }>()
const store = useMediaStore()
</script>

<template><article class="media-card"><div :class="['art', programme.tone]"><span>{{ programme.genre }}</span><button :aria-label="`Toggle ${programme.title} in watchlist`" @click="store.toggleWatchlist(programme.id)">{{ store.watchlist.includes(programme.id) ? '✓' : '+' }}</button><i v-if="programme.progress" :style="{ width: `${programme.progress}%` }" /></div><h3>{{ programme.title }}</h3><p>{{ programme.year }} · {{ programme.duration }}</p></article></template>
