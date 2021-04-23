import { get } from '@/api/base'

export function processSongs (songs) {
  if (!songs.length) {
    return Promise.resolve(songs)
  }
  return get('/api/getSongsUrl', {
    mid: songs.map(song => song.mid)
  }).then(result => {
    const map = result.map
    return songs.map(song => ({ ...song, url: map[song.mid] })).filter(item => item.url.includes('vkey'))
  })
}
