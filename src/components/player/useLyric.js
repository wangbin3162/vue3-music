import { useStore } from 'vuex'
import { computed, ref, watch } from 'vue'
import { getLyric } from '@/api/song'
import Lyric from 'lyric-parser'

export default function useLyric () {
  const currentLyric = ref(null)
  const store = useStore()
  const currentSong = computed(() => store.getters.currentSong)
  watch(currentSong, async (newSong, oldSong) => {
    if (!newSong.id || !newSong.url || newSong.id === oldSong.id) {
      return
    }
    const lyric = await getLyric(newSong)
    if (currentSong.value.lyric !== lyric) {
      return
    }
    store.commit('addSongLyric', { song: newSong, lyric })
    currentLyric.value = new Lyric(lyric, handleLyric)
    console.log(lyric)
  })

  function handleLyric () {

  }
}
