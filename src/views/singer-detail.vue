<template>
  <div class="singer-detail">
    <music-list :songs="songs" :pic="pic" :title="title" :loading="loading" />
  </div>
</template>

<script>
import { getSingerDetail } from '@/api/singer'
import { processSongs } from '@/api/song'
import MusicList from '@/components/music-list/music-list'
import storage from 'good-storage'
import { SINGER_KEY } from '@/assets/js/constant'

export default {
  name: 'singer-detail',
  components: { MusicList },
  data () {
    return {
      songs: [],
      loading: true
    }
  },
  props: {
    singer: Object
  },
  computed: {
    computedSinger () {
      let ret = null
      const singer = this.singer
      if (singer) {
        ret = singer
      } else {
        const cachedSinger = storage.session.get(SINGER_KEY)
        if (cachedSinger && cachedSinger.mid === this.$route.params.id) {
          ret = cachedSinger
        }
      }
      return ret
    },
    pic () {
      const singer = this.computedSinger
      return singer && singer.pic
    },
    title () {
      const singer = this.computedSinger
      return singer && singer.name
    }
  },
  async created () {
    if (!this.computedSinger) {
      const path = this.$route.matched[0].path
      this.$router.push({ path })
      return
    }
    const result = await getSingerDetail(this.computedSinger)
    this.songs = await processSongs(result.songs)
    this.loading = false
  }
}
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
