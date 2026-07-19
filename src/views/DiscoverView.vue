<script setup lang="ts">
import { computed, ref } from 'vue'
import { useMediaStore } from '../store'
import MediaCard from '../components/MediaCard.vue'
const store = useMediaStore(); const search = ref(''); const genre = ref('All')
const genres = computed(() => ['All', ...new Set(store.programmes.map((p) => p.genre))])
const filtered = computed(() => store.programmes.filter((p) => (genre.value === 'All' || p.genre === genre.value) && p.title.toLowerCase().includes(search.value.toLowerCase())))
</script>

<template><main><section class="hero"><div><span>Original European stories</span><h1>Brussels After Rain</h1><p>A portrait of the people rebuilding public space, one street at a time.</p><button>▶ Play feature</button><button class="ghost" @click="store.toggleWatchlist(1)">+ My list</button></div></section><section class="controls"><div><h2>Discover</h2><p>Stories selected for curious minds.</p></div><input v-model="search" aria-label="Search programmes" placeholder="Search titles"/><select v-model="genre" aria-label="Filter by genre"><option v-for="item in genres" :key="item">{{ item }}</option></select></section><section v-if="filtered.length" class="media-grid"><MediaCard v-for="item in filtered" :key="item.id" :programme="item" /></section><div v-else class="empty">No programmes match your search.</div></main></template>
