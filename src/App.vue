<template>
  <m-header />
  <tab />
  <router-view :style="viewStyle" v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <router-view v-slot="{ Component }" :style="viewStyle" name="user">
    <transition appear name="slide">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
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
