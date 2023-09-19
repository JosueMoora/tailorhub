'use client'
import { deleteFavorite, getFavorite, postFavorite } from '@/hooks/useFavorites'
import { Logout, Verify, login, signup } from '@/hooks/useUsers'
import { useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth deberia estar dentro de un provider')
  }
  return context
}
export default function AuthProvider ({ children }) {
  const [user, setUser] = useState(null)
  const [favorites, setFavorites] = useState()
  const [isAuth, setIsAuth] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [errorFav, setErrorFav] = useState('')
  const router = useRouter()
  const register = async (user) => {
    try {
      const data = await signup(user)
      if (data) {
        setUser(user)
        alert('Usuario creado con exito, ya puedes iniciar sesión')
        router.push('/login')
      }
    } catch (error) {
      console.log(error)
      setError(error?.response?.data?.msg)
    }
  }
  const setLogin = async (user) => {
    try {
      const data = await login(user)
      if (data) {
        setIsAuth(true)
        setLoading(false)
        router.push('/')
      }
    } catch (error) {
      setError(error?.response?.data?.msg)
    }
  }
  const signout = async () => {
    const data = await Logout()
    if (data) {
      setIsAuth(false)
      setLoading(false)
      router.push('/')
    }
  }
  const verify = async () => {
    const data = await Verify()
    if (data?.username) {
      setIsAuth(true)
      setUser(data)
    } else {
      setIsAuth(false)
      setUser(null)
    }
  }
  const getFavs = async () => {
    const data = await getFavorite()
    if (data) {
      setFavorites(data)
      setLoading(false)
    } else {
      setErrorFav('No tienes ningun favorito')
    }
  }
  const postFav = async (favorite) => {
    try {
      const data = await postFavorite(favorite)
      if (data) {
        setFavorites(data)
        setLoading(false)
      }
    } catch (error) {
      setError(error?.response?.data?.msg)
    }
  }
  const deleteFav = async (id) => {
    try {
      const data = await deleteFavorite(id)
      if (data) {
        setFavorites(data)
        setLoading(false)
      }
    } catch (error) {
      setError(error?.response?.data?.msg)
    }
  }
  useEffect(() => {
    verify()
    getFavs()
  }, [isAuth])
  return (
    <AuthContext.Provider
      value={{
        register,
        setLogin,
        signout,
        getFavs,
        postFav,
        deleteFav,
        setLoading,
        loading,
        favorites,
        user,
        error,
        errorFav,
        isAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
