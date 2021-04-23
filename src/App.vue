<template>
  <m-header />
  <tab />
  <router-view />
  <player />
</template>

<script>
import MHeader from './components/header/header'
import Tab from './components/tab/tab'
import Player from '@/components/player/player'

export default {
  components: {
    Player,
    Tab,
    MHeader
  }
}
</script>
