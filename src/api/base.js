import axios from 'axios'

const ERR_OK = 0
const baseURL = process.env.NODE_ENV === 'production' ? '/vue3-music' : '/'
axios.defaults.baseURL = baseURL

export function get (url, params) {
  return axios.get(url, { params }).then(res => {
    const { data } = res
    if (data.code === ERR_OK) {
      return data.result
    }
  }).catch(e => {
    console.log(e)
  })
}
