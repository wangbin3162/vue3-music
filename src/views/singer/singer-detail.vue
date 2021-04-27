<template>
  <div class="singer-detail">
    <music-list :songs="songs" :pic="pic" :title="title" :loading="loading" />
  </div>
</template>

<script>
import createDetailComponent from '@/assets/js/create-detail-component'
import { getSingerDetail } from '@/api/singer'
import { SINGER_KEY } from '@/assets/js/constant'

export default createDetailComponent('singer-detail', SINGER_KEY, getSingerDetail)
</script>

<style scoped lang="stylus">
.singer-detail {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: $color-background;
}
</style>
