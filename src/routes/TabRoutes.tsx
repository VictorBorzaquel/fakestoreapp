import React from 'react'
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
  BottomTabNavigationOptions
} from '@react-navigation/bottom-tabs'
import {
  RouteProp,
  NavigatorScreenParams,
  ParamListBase,
} from '@react-navigation/native'
import styled, { useTheme } from 'styled-components/native'
import { HomeRoutes, RootHomeParamList } from './Home.routes'
import { Ionicons } from '@expo/vector-icons'
import { RootSearchParamList, SearchRoutes } from './Search.routes'
import { CartRoutes, RootCartParamList } from './Cart.routes'
import { ProfileRoutes, RootProfileParamList } from './Profile.routes'
import { RFValue } from 'react-native-responsive-fontsize'
import { BorderlessButton } from 'react-native-gesture-handler'
import { View } from 'react-native'
import { FavoritesRoutes, RootFavoritesParamList } from './Favorites.routes'
import { IconNameType } from '../global/interfaces'

interface IRouteParams {
  title: string;
  iconName: IconNameType;
}

type TScreenOptions = BottomTabNavigationOptions | ((props: {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}) => BottomTabNavigationOptions) | undefined

export type RootSignInParamList = {
  HomeRoutes: NavigatorScreenParams<RootHomeParamList>;
  SearchRoutes: NavigatorScreenParams<RootSearchParamList>;
  CartRoutes: NavigatorScreenParams<RootCartParamList>;
  ProfileRoutes: NavigatorScreenParams<RootProfileParamList>;
  FavoritesRoutes: NavigatorScreenParams<RootFavoritesParamList>;
};

export type RootSignInNavigationProps<Screen extends keyof RootSignInParamList> = BottomTabNavigationProp<RootSignInParamList, Screen>;
export type RootSignInRouteProps<Screen extends keyof RootSignInParamList> = RouteProp<RootSignInParamList, Screen>;

export function TabRoutes() {
  const { Screen, Navigator } = createBottomTabNavigator()
  const theme = useTheme()

  function selectRouteParams(routeName: keyof RootSignInParamList): IRouteParams {
    switch (routeName) {
      case 'HomeRoutes': return {
        title: 'Home',
        iconName: 'home',
      }
      case 'SearchRoutes': return {
        title: 'Search',
        iconName: 'search',
      }
      case 'FavoritesRoutes': return {
        title: 'Favorite',
        iconName: 'heart',
      }
      case 'CartRoutes': return {
        title: 'Cart',
        iconName: 'cart',
      }
      case 'ProfileRoutes': return {
        title: 'Profile',
        iconName: 'person',
      }
    }
  }

  const ScreenOptions: TScreenOptions = ({ route }) => {
    const params = selectRouteParams(route.name as keyof RootSignInParamList)

    return {
      headerShown: false,
      tabBarActiveTintColor: theme.colors.title,
      tabBarStyle: {
        paddingBottom: 3
      },
      tabBarIconStyle: {
        fontSize: 20,
        marginBottom: -3
      },
      tabBarLabel: (({ focused }) => <TabBarLabel focused={focused}>{params.title}</TabBarLabel>),
      tabBarIcon: (({ focused, color }) => (
        <Ionicons
          name={params.iconName + (focused ? '' : '-outline') as IconNameType}
          size={24}
          color={color}
        />
      )),
      tabBarButton: ({ children, ...rest }: any) => (
        <BorderlessButton {...rest}>
          <View>
            {children}
          </View>
        </BorderlessButton>
      ),
    }
  }

  return (
    <Navigator
      initialRouteName='HomeRoutes'
      screenOptions={ScreenOptions}
    >
      <Screen name="HomeRoutes" component={HomeRoutes} />
      {/* <Screen name="SearchRoutes" component={SearchRoutes} /> */}
      <Screen name="FavoritesRoutes" component={FavoritesRoutes} />
      <Screen name="CartRoutes" component={CartRoutes} />
      <Screen name="ProfileRoutes" component={ProfileRoutes} />
    </Navigator>
  )
}

const TabBarLabel = styled.Text<{ focused: boolean }>`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme, focused }) => theme.fonts.family[focused ? 'title' : 'text']};
  font-size: ${RFValue(11)}px;
  text-align: center;
`
