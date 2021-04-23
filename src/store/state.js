import { PLAY_MODE, SEARCH_KEY } from '@/assets/js/constant'

const state = {
  sequenceList: [],
  playlist: [],
  playing: false,
  playMode: PLAY_MODE.sequence,
  currentIndex: 0,
  fullScreen: false
}

export default state
