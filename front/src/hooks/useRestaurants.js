import axios from 'axios'

export async function getRestaurants () {
  const { data } = await axios.get('https://tailorhub-dev.fl0.io/api/restaurants')
  return data
}
export async function getRestaurant (id) {
  const { data } = await axios.get(`https://tailorhub-dev.fl0.io/api/restaurants/${id}`)
  return data
}
