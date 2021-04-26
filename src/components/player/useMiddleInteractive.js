import { ref } from 'vue'

export default function useMiddleInteractive () {
  const currentShow = ref('cd')
  const middleLStyle = ref(null)
  const middleRStyle = ref(null)

  const touch = {}
  let currentView = 'cd'

  function onMiddleTouchStart (e) {
    touch.startX = e.touches[0].pageX
    touch.startY = e.touches[0].pageY
    touch.directionLoced = ''
  }

  function onMiddleTouchMove (e) {
    const deltaX = e.touches[0].pageX - touch.startX
    const deltaY = e.touches[0].pageY - touch.startY

    const absDeltaX = Math.abs(deltaX)
    const absDeltaY = Math.abs(deltaY)

    // 方向锁，判定触摸滑动的x位置要大于y轴位置，这时候判定为有效的横向滚动
    if (!touch.directionLoced) {
      touch.directionLoced = absDeltaX >= absDeltaY ? 'h' : 'v'
    }
    if (touch.directionLoced === 'v') {
      return
    }

    const left = currentView === 'cd' ? 0 : -window.innerWidth
    const offsetWidth = Math.min(0, Math.max(-window.innerWidth, left + deltaX))
    touch.percent = Math.abs(offsetWidth / window.innerWidth)
    if (currentView === 'cd') {
      currentShow.value = touch.percent > 0.2 ? 'lyric' : 'cd'
    } else {
      currentShow.value = touch.percent < 0.8 ? 'cd' : 'lyric'
    }
    middleLStyle.value = { opacity: 1 - touch.percent }
    middleRStyle.value = { transform: `translate3d(${offsetWidth}px,0,0)` }
  }

  function onMiddleTouchEnd (e) {
    let offsetWidth = 0
    let opacity = 0
    if (currentShow.value === 'cd') {
      currentView = 'cd'
      offsetWidth = 0
      opacity = 1
    } else {
      currentView = 'lyric'
      offsetWidth = -window.innerWidth
      opacity = 0
    }
    const duration = 300

    middleLStyle.value = { opacity, transitionDuration: `${duration}ms` }
    middleRStyle.value = { transform: `translate3d(${offsetWidth}px,0,0)`, transitionDuration: `${duration}ms` }
  }

  return {
    currentShow,
    middleLStyle,
    middleRStyle,
    onMiddleTouchStart,
    onMiddleTouchMove,
    onMiddleTouchEnd
  }
}
