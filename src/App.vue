<script setup lang="ts">
import BackendStatus from './components/BackendStatus.vue'
import { RouterLink, RouterView } from 'vue-router'
import { useMediaStore } from './store'
const store = useMediaStore()
</script>

<template><div class="shell"><header><RouterLink class="brand" to="/">Lumen<span>Screen</span></RouterLink><nav><RouterLink to="/">Discover</RouterLink><RouterLink to="/watchlist">My list <b>{{ store.watchlist.length }}</b></RouterLink><RouterLink to="/studio">Creator studio</RouterLink></nav><div class="avatar">AV</div></header><RouterView /></div><BackendStatus /></template>
