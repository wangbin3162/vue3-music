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

  const modeText = computed(() => {
    const playModeVal = playMode.value
    const map = {
      0: '顺序播放',
      1: '单曲循环',
      2: '随机播放'
    }
    return map[playModeVal]
  })

  function changeMode () {
    const mode = (playMode.value + 1) % 3
    store.dispatch('changeMode', mode)
  }

  return {
    modeIcon,
    modeText,
    changeMode
  }
}
