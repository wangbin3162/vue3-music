import { get } from './base'

export function getHotKeys () {
  return get('/api/getHotKeys')
}

// 搜索列表，关键词，页码，以及是否带歌手数据
export function search (query, page, showSinger) {
  return get('/api/search', { query, page, showSinger })
}
