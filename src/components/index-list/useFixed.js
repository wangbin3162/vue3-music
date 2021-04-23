import { ref, reactive, watch, nextTick, computed } from 'vue'

export default function useFixed (props) {
  const TITLE_HEIGHT = 30
  const groupRef = ref(null)
  const listHeights = reactive([])
  const scrollY = ref(0)
  const currentIndex = ref(0)
  const distance = ref(0)

  const fixedTitle = computed(() => {
    if (scrollY.value < 0) {
      return ''
    }
    const currentGroup = props.data[currentIndex.value]
    return currentGroup ? currentGroup.title : ''
  })

  const fixedStyle = computed(() => {
    const distanceVal = distance.value
    const diff = (distanceVal > 0 && distanceVal < TITLE_HEIGHT) ? distanceVal - TITLE_HEIGHT : 0
    return {
      transform: `translate3d(0,${diff}px,0)`
    }
  })

  watch(() => props.data, async () => {
    await nextTick()
    calculate()
  })

  watch(() => scrollY.value, (newY) => {
    for (let i = 0; i < listHeights.length - 1; i++) {
      const heightTop = listHeights[i]
      const heightBottom = listHeights[i + 1]
      if (newY >= heightTop && newY <= heightBottom) {
        currentIndex.value = i
        distance.value = heightBottom - newY
      }
    }
  })
  // 计算高度
  const calculate = () => {
    const list = groupRef.value.children
    let height = 0
    listHeights.length = 0
    listHeights.push(height)
    for (let i = 0; i < list.length; i++) {
      height += list[i].clientHeight
      listHeights.push(height)
    }
  }

  const onScroll = (pos) => {
    scrollY.value = -pos.y
  }

  return {
    groupRef,
    fixedTitle,
    fixedStyle,
    currentIndex,
    onScroll
  }
}
