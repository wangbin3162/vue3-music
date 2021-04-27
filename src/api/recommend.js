import { get } from './base'

// 获取推荐页
export function getRecommend () {
  return get('/api/getRecommend')
}

// 获取歌单列表
export function getAlbum (album) {
  return get('/api/getAlbum', { id: album.id })
}
