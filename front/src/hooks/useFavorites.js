import axios from 'axios'

export const getFavorite = async () => {
  try {
    const { data } = await axios.get('http://localhost:3001/api/favorites', {
      withCredentials: true
    })
    return data.favorite
  } catch (error) {
    return (error.response.data.msg)
  }
}

export const postFavorite = async (favorite) => {
  try {
    const { data } = await axios.post('http://localhost:3001/api/favorites', favorite, {
      withCredentials: true
    })
    return data
  } catch (error) {
    return (error.response.data.msg)
  }
}
export const deleteFavorite = async (id) => {
  try {
    const { data } = await axios.delete(`http://localhost:3001/api/favorites/${id}`, {
      withCredentials: true
    })
    return data
  } catch (error) {
    return (error.response.data.msg)
  }
}
