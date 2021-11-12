import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { IUser } from "../../services/apiProps";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({} as {
  user: IUser;
  favorites: number[];
  toggleFavorite(id: number): void;
})

const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState({} as IUser)
  const [favorites, setFavorites] = useState([] as number[])
  const [isLoading, setIsLoading] = useState(true)

  const FAVORITE_KEY = '@fakestorageapp_favorites?id:'

  async function toggleFavorite(id: number) {
    try {
      const updatedFavorites = favorites
      const index = favorites.indexOf(id)

      if (index === -1) {
        favorites.push(id)
      } else {
        favorites.splice(index, id)
      }

      setFavorites(updatedFavorites)

      const KEY = FAVORITE_KEY + String(user.id)
      await AsyncStorage.setItem(KEY, JSON.stringify(updatedFavorites))
    } catch (error: any) {
      throw new Error(error)
    }
  }

  async function loadUserData() {
    try {
      const response = await api.get<IUser>('/users/1')

      const KEY = FAVORITE_KEY + String(user.id)
      const favoritesResponse = await AsyncStorage.getItem(KEY)

      const favorites: number[] = favoritesResponse !== null ? JSON.parse(favoritesResponse) : []

      setFavorites(favorites)
      setUser(response.data)
    } catch (error: any) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    try {
      loadUserData()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  if (isLoading) return null
  return (
    <AuthContext.Provider value={{
      user,
      favorites,
      toggleFavorite,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export { useAuth, AuthProvider }