import React from 'react'
import { 
  createNativeStackNavigator, 
  NativeStackNavigationProp
} from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Favorites } from '../screens/Favorites';

export type RootFavoritesParamList = {
  Favorites: undefined;
};

export type RootFavoritesNavigationProps<Screen extends keyof RootFavoritesParamList> = NativeStackNavigationProp<RootFavoritesParamList, Screen>;
export type RootFavoritesRouteProps<Screen extends keyof RootFavoritesParamList> = RouteProp<RootFavoritesParamList, Screen>;

export function FavoritesRoutes() {
  const { Screen, Navigator } = createNativeStackNavigator<RootFavoritesParamList>();

  return (
    <Navigator
      initialRouteName='Favorites'
      screenOptions={{headerShown: false}}
    >
      <Screen name="Favorites" component={Favorites} />
    </Navigator>
  )
}
