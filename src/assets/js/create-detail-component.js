import MusicList from '@/components/music-list/music-list'
import storage from 'good-storage'
import { processSongs } from '@/api/song'

// 复用歌单详情，创建必要组件
export default function createDetailComponent (name, key, fetch) {
  return {
    name,
    components: { MusicList },
    data () {
      return {
        songs: [],
        loading: true
      }
    },
    props: {
      data: Object
    },
    computed: {
      computedData () {
        let ret = null
        const data = this.data
        if (data) {
          ret = data
        } else {
          // 获取session缓存是否存有当前key值的歌单
          const cached = storage.session.get(key)
          const id = cached.mid || cached.id + ''
          if (cached && id === this.$route.params.id) {
            ret = cached
          }
        }
        return ret
      },
      pic () {
        const data = this.computedData
        return data && data.pic
      },
      title () {
        const data = this.computedData
        return data && (data.name || data.title)
      }
    },
    async created () {
      const data = this.computedData
      if (!data) {
        const path = this.$route.matched[0].path
        this.$router.push({ path })
        return
      }
      const result = await fetch(data)
      this.songs = await processSongs(result.songs)
      this.loading = false
    }
  }
}
