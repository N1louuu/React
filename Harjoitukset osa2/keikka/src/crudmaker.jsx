import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

export const getAll = () => {
  return axios.get(baseUrl)
}

export const create = newObject => {
  return axios.post(baseUrl, newObject)
}

export const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

export const mydelete = (id) => {
  const response = axios.delete(`${baseUrl}/${id}`);
  return true
}