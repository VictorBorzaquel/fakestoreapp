import React from 'react'
import { 
  createNativeStackNavigator, 
  NativeStackNavigationProp
} from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Search } from '../screens/Search';

export type RootSearchParamList = {
  Search: undefined;
};

export type RootSearchNavigationProps<Screen extends keyof RootSearchParamList> = NativeStackNavigationProp<RootSearchParamList, Screen>;
export type RootSearchRouteProps<Screen extends keyof RootSearchParamList> = RouteProp<RootSearchParamList, Screen>;

export function SearchRoutes() {
  const { Screen, Navigator } = createNativeStackNavigator<RootSearchParamList>();

  return (
    <Navigator
      initialRouteName='Search'
      screenOptions={{headerShown: false}}
    >
      <Screen name="Search" component={Search} />
    </Navigator>
  )
}
