<template>
  <m-header />
  <tab />
  <router-view />
</template>

<script>
import MHeader from './components/header/header'
import Tab from './components/tab/tab'

export default {
  components: {
    Tab,
    MHeader
  }
}
</script>
