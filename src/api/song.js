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

const lyricMap = {}

export function getLyric (song) {
  // 如果歌词里有缓存则直接返回歌曲的歌词
  if (song.lyric) {
    return Promise.resolve(song.lyric)
  }
  const { mid } = song
  // 如果缓存对象中有同mid的歌曲歌词则返回歌曲池里的歌词
  const lyric = lyricMap[mid]
  if (lyric) {
    return Promise.resolve(lyric)
  }
  return get('/api/getLyric', { mid }).then(result => {
    const lyric = result ? result.lyric : '[00:00:00]该歌曲暂时无法获取歌词'
    lyricMap[mid] = lyric
    return lyric
  })
}
