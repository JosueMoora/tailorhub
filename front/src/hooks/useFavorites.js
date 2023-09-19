import axios from 'axios'

export const getFavorite = async () => {
  try {
    const { data } = await axios.get('https://tailorhub-dev.fl0.io/api/favorites', {
      withCredentials: true
    })
    return data.favorite
  } catch (error) {
    return (error.response.data.msg)
  }
}

export const postFavorite = async (favorite) => {
  try {
    const { data } = await axios.post('https://tailorhub-dev.fl0.io/api/favorites', favorite, {
      withCredentials: true
    })
    return data
  } catch (error) {
    return (error.response.data.msg)
  }
}
export const deleteFavorite = async (id) => {
  try {
    const { data } = await axios.delete(`https://tailorhub-dev.fl0.io/api/favorites/${id}`, {
      withCredentials: true
    })
    return data
  } catch (error) {
    return (error.response.data.msg)
  }
}
