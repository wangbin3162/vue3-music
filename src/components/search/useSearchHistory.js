import { remove, save, clear } from '@/assets/js/array-store'
import { SEARCH_KEY } from '@/assets/js/constant'
import { useStore } from 'vuex'

export default function useSearchHistory () {
  const maxLen = 50
  const store = useStore()

  function saveSearch (query) {
    const list = save(query, SEARCH_KEY, item => item === query, maxLen)
    store.commit('setSearchHistory', list)
  }

  function deleteSearch (query) {
    const list = remove(SEARCH_KEY, item => item === query)
    store.commit('setSearchHistory', list)
  }

  function clearSearch () {
    const list = clear(SEARCH_KEY)
    store.commit('setSearchHistory', list)
  }

  return {
    saveSearch,
    deleteSearch,
    clearSearch
  }
}
