import { useStore } from 'vuex'
import { computed } from 'vue'

export default function useMode () {
  const store = useStore()
  const playMode = computed(() => store.state.playMode)
  const modeIcon = computed(() => {
    const playModeVal = playMode.value
    const map = {
      0: 'icon-sequence',
      1: 'icon-loop',
      2: 'icon-random'
    }
    return map[playModeVal]
  })

  function changeMode () {
    const mode = (playMode.value + 1) % 3
    store.dispatch('changeMode', mode)
  }

  return {
    modeIcon,
    changeMode
  }
}
