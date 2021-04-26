<template>
  <m-header />
  <tab />
  <router-view :style="viewStyle" />
  <player />
</template>

<script>
import MHeader from './components/header/header'
import Tab from './components/tab/tab'
import Player from '@/components/player/player'

export default {
  components: { Player, Tab, MHeader },
  computed: {
    viewStyle () {
      const bottom = this.$store.state.playlist.length ? '60px' : '0'
      return {
        bottom
      }
    }
  }
}
</script>
