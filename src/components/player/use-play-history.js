import { useStore } from 'vuex'
import { save } from '@/assets/js/array-store'
import { PLAY_KEY } from '@/assets/js/constant'

export default function usePlayHistory () {
  const store = useStore()

  function savePlay (song) {
    const songs = save(song, PLAY_KEY, item => item.id === song.id, 200)
    store.commit('setPlayHistory', songs)
  }

  return { savePlay }
}
