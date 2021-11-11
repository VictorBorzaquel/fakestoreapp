import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Home } from '../screens/Home';
import { ProductDetails } from '../screens/ProductDetails';
import { IProduct, TCategory } from '../services/apiProps';
import { CategoryProducts } from '../screens/CategoryProducts';

export type RootHomeParamList = {
  Home: undefined;
  ProductDetails: IProduct;
  CategoryProducts: { category: TCategory };
};

export type RootHomeNavigationProps<Screen extends keyof RootHomeParamList> = NativeStackNavigationProp<RootHomeParamList, Screen>;
export type RootHomeRouteProps<Screen extends keyof RootHomeParamList> = RouteProp<RootHomeParamList, Screen>;

export function HomeRoutes() {
  const { Screen, Navigator } = createNativeStackNavigator<RootHomeParamList>();

  return (
    <Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}
    >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="CategoryProducts"
        component={CategoryProducts}
      />
      <Screen
        name="ProductDetails"
        component={ProductDetails}
      />
    </Navigator>
  )
}
