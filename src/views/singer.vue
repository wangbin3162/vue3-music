<template>
  <div class="singer" v-loading="!singers.length">
    <index-list :data="singers" />
  </div>
</template>

<script>
import { getSingerList } from '@/api/singer'
import IndexList from '@/components/index-list/index-list'

export default {
  name: 'singer',
  components: { IndexList },
  data () {
    return {
      singers: []
    }
  },
  async created () {
    const result = await getSingerList()
    this.singers = result.singers
    console.log(result)
  }
}
</script>

<style scoped lang="stylus">
.singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
</style>
