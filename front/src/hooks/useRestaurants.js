import axios from 'axios'

export async function getRestaurants () {
  const { data } = await axios.get('http://localhost:3001/api/restaurants')
  return data
}
export async function getRestaurant (id) {
  const { data } = await axios.get(`http://localhost:3001/api/restaurants/${id}`)
  return data
}
