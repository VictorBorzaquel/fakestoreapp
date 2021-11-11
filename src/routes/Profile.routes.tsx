import React from 'react'
import { 
  createNativeStackNavigator, 
  NativeStackNavigationProp
} from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Profile } from '../screens/Profile';

export type RootProfileParamList = {
  Profile: undefined;
};

export type RootProfileNavigationProps<Screen extends keyof RootProfileParamList> = NativeStackNavigationProp<RootProfileParamList, Screen>;
export type RootProfileRouteProps<Screen extends keyof RootProfileParamList> = RouteProp<RootProfileParamList, Screen>;

export function ProfileRoutes() {
  const { Screen, Navigator } = createNativeStackNavigator<RootProfileParamList>();

  return (
    <Navigator
      initialRouteName='Profile'
      screenOptions={{headerShown: false}}
    >
      <Screen name="Profile" component={Profile} />
    </Navigator>
  )
}
