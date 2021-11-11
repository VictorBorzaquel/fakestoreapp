import React from 'react'
import { 
  createNativeStackNavigator, 
  NativeStackNavigationProp
} from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Cart } from '../screens/Cart';

export type RootCartParamList = {
  Cart: undefined;
};

export type RootCartNavigationProps<Screen extends keyof RootCartParamList> = NativeStackNavigationProp<RootCartParamList, Screen>;
export type RootCartRouteProps<Screen extends keyof RootCartParamList> = RouteProp<RootCartParamList, Screen>;

export function CartRoutes() {
  const { Screen, Navigator } = createNativeStackNavigator<RootCartParamList>();

  return (
    <Navigator
      initialRouteName='Cart'
      screenOptions={{headerShown: false}}
    >
      <Screen name="Cart" component={Cart} />
    </Navigator>
  )
}
