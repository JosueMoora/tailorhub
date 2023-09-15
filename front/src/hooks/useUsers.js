import axios from 'axios'
// import { setCookie } from 'cookies-next'

export async function User (user) {
  const { data } = await axios.post('http://localhost:3001/api/login', user, {
    withCredentials: true,
    credentials: 'include',
    redirect: 'follow'
  })
  return data
}

export async function Logout () {
  const { data } = await axios.post('http://localhost:3001/api/logout', {
    withCredentials: true
  })
  return data
}
