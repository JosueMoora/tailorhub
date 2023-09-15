import { Request, Response } from 'express'
import fs from 'fs'
import path from 'path'

const restaurantsFilePath = path.join(__dirname, '../data/restaurants.json')

interface Restaurant {
  id: number
  name: string
  neighborhood: string
  address: string
  image: string
  cuisineType: string
}

// Función para leer el archivo restaurants.json
function readRestaurantsFile (): Restaurant[] {
  try {
    const data = fs.readFileSync(restaurantsFilePath, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error al leer el archivo de restaurantes:', error)
    return []
  }
}

// Función para guardar los datos en el archivo restaurants.json
function saveRestaurantsFile (data: Restaurant[]): void {
  try {
    fs.writeFileSync(restaurantsFilePath, JSON.stringify(data, null, 2), 'utf8')
  } catch (error) {
    console.error('Error al guardar en el archivo de restaurantes:', error)
  }
}

// Obtener todos los restaurantes
export const getAllRestaurants = (_req: Request, res: Response): any => {
  const restaurants = readRestaurantsFile()
  return res.status(200).send(restaurants)
}

// Obtener restaurante por ID
export const getRestaurant = (req: Request, res: Response): any => {
  const restaurants = readRestaurantsFile()
  const { id } = req.params
  const restaurant = restaurants.find((restaurant) => restaurant.id === parseInt(id))
  res.status(200).json(restaurant)
}

// Agregar un nuevo restaurante
export const addRestaurant = (req: Request, res: Response): any => {
  const { name, neighborhood, address, image, cuisineType } = req.body
  const restaurants = readRestaurantsFile()
  const newRestaurant: Restaurant = { id: restaurants.length + 1, name, neighborhood, address, image, cuisineType }
  restaurants.push(newRestaurant)
  saveRestaurantsFile(restaurants)
  res.status(201).json(newRestaurant)
}

// Actualizar un restaurante existente por su ID
export const updateRestaurant = (req: Request, res: Response): any => {
  const { id } = req.params
  const { name, neighborhood, address, image, cuisineType } = req.body
  const restaurants = readRestaurantsFile()
  const restaurantToUpdate = restaurants.find((restaurant) => restaurant.id === parseInt(id))
  if (restaurantToUpdate != null) {
    restaurantToUpdate.name = name
    restaurantToUpdate.neighborhood = neighborhood
    restaurantToUpdate.address = address
    restaurantToUpdate.image = image
    restaurantToUpdate.cuisineType = cuisineType
    saveRestaurantsFile(restaurants)
    res.json(restaurantToUpdate)
  } else {
    res.status(404).json({ message: 'Restaurante no encontrado' })
  }
}

// Eliminar un restaurante por su ID
export const deleteRestaurant = (req: Request, res: Response): any => {
  const { id } = req.params
  const restaurants = readRestaurantsFile()
  const index = restaurants.findIndex((restaurant) => restaurant.id === parseInt(id))
  if (index !== -1) {
    restaurants.splice(index, 1)
    saveRestaurantsFile(restaurants)
    res.json({ message: 'Restaurante eliminado correctamente' })
  } else {
    res.status(404).json({ message: 'Restaurante no encontrado' })
  }
}
