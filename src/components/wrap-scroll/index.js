import { h, ref, computed, watch, nextTick } from 'vue'
import Scroll from '@/components/base/scroll/scroll'
import { useStore } from 'vuex'

export default {
  name: 'wrap-scroll',
  props: Scroll.props,
  emits: Scroll.emits,
  render (ctx) {
    return h(Scroll,
      {
        ref: 'scrollRef',
        ...ctx.$props,
        onScroll: (e) => {
          ctx.$emit('scroll', e)
        }
      },
      ctx.$slots.default)
  },
  setup () {
    const scrollRef = ref(null)
    const scroll = computed(() => scrollRef.value.scroll)

    const store = useStore()
    const playlist = computed(() => store.state.playlist)

    watch(playlist, async () => {
      await nextTick()
      scroll.value.refresh()
    })

    return {
      scrollRef,
      scroll
    }
  }
}
