import axios from 'axios'

export function getNames () {
  return axios.get('/some/path').then(res => res.data)
}

export function getPost () {
  return axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res => res.data)
}
