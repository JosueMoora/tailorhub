import axios from 'axios'
export async function login (user) {
  const { data } = await axios.post('http://localhost:3001/api/login', user, {
    withCredentials: true,
    credentials: 'include',
    redirect: 'follow'
  })
  return data
}

export async function signup (user) {
  const { data } = await axios.post('http://localhost:3001/api/sign-up', user, {
    withCredentials: true,
    credentials: 'include',
    redirect: 'follow'
  })
  return data
}

export async function Logout () {
  try {
    const { data } = await axios.get('http://localhost:3001/api/log-out', { withCredentials: true })
    alert(data)
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function Verify () {
  try {
    const { data } = await axios.get('http://localhost:3001/api/verify', { withCredentials: true })
    return data
  } catch (error) {
    console.log(error)
  }
}
