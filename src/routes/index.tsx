import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { TabRoutes } from './TabRoutes';

export function Routes() {
  return (
    <NavigationContainer independent>
      <TabRoutes/>
    </NavigationContainer>
  )
}