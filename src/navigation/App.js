import React, {useContext, useEffect} from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import ViewSneaker from '../screens/ViewSneaker';
import FavoriteLIst from '../screens/FavoriteList';
import User from '../screens/User';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SneakersContext} from '../contexts/SneakersContext';
import {FavoritesContextProvider} from '../contexts/FavoriteContext';
import {IconGlobal} from '../design';
import IMAGES from '../assets';
import {createStackNavigator} from '@react-navigation/stack';
import {SpanIcon} from '../design';
import {FavoritesContext} from '../contexts/FavoriteContext';
import {CartContext} from '../contexts/CartContext';
import {ContextCart} from '../contexts/CartContext';
import SplashCreen from 'react-native-splash-screen';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarLabelStyle: {
    display: 'none',
  },
};

const Stack = createStackNavigator();

function Main() {
  const {favoriteList} = useContext(FavoritesContext);
  const {cartSneakers} = useContext(ContextCart);

  useEffect(() => {
    SplashCreen.hide();
  });

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={({navigation}) => {
          return {
            tabBarIcon: () => (
              <IconGlobal
                source={
                  navigation.getState().index === 0
                    ? IMAGES.active.home
                    : IMAGES.inactive.home
                }
              />
            ),
            ...screenOptions,
          };
        }}
      />
      <Tab.Screen
        name="CartTab"
        component={Cart}
        options={({navigation}) => {
          if (cartSneakers.length === 0 && navigation.getState().index === 1) {
            return {
              tabBarIcon: () => <SpanIcon source={IMAGES.active.cart} />,
              ...screenOptions,
            };
          } else if (
            cartSneakers.length === 0 &&
            navigation.getState().index !== 1
          ) {
            return {
              tabBarIcon: () => <SpanIcon source={IMAGES.inactive.cart} />,
              ...screenOptions,
            };
          } else if (
            cartSneakers.length > 0 &&
            navigation.getState().index === 1
          ) {
            return {
              tabBarIcon: () => (
                <SpanIcon
                  spanText={cartSneakers.length}
                  source={IMAGES.active.cartSpan}
                />
              ),
              ...screenOptions,
            };
          } else {
            return {
              tabBarIcon: () => (
                <SpanIcon
                  spanText={cartSneakers.length}
                  source={IMAGES.inactive.cartSpan}
                />
              ),
              ...screenOptions,
            };
          }
        }}
      />
      <Tab.Screen
        name="FavoriteListTab"
        component={FavoriteLIst}
        options={({navigation}) => {
          if (favoriteList.length === 0 && navigation.getState().index === 2) {
            return {
              tabBarIcon: () => <SpanIcon source={IMAGES.active.favorite} />,
              ...screenOptions,
            };
          } else if (
            favoriteList.length === 0 &&
            navigation.getState().index !== 2
          ) {
            return {
              tabBarIcon: () => <SpanIcon source={IMAGES.inactive.favorite} />,
              ...screenOptions,
            };
          } else if (
            favoriteList.length > 0 &&
            navigation.getState().index === 2
          ) {
            return {
              tabBarIcon: () => (
                <SpanIcon
                  spanText={favoriteList.length}
                  source={IMAGES.active.favoriteSpan}
                />
              ),
              ...screenOptions,
            };
          } else {
            return {
              tabBarIcon: () => (
                <SpanIcon
                  spanText={favoriteList.length}
                  source={IMAGES.inactive.favoriteSpan}
                />
              ),
              ...screenOptions,
            };
          }
        }}
      />
      <Tab.Screen
        name="UserTab"
        component={User}
        options={({navigation}) => {
          return {
            tabBarIcon: () => (
              <IconGlobal
                source={
                  navigation.getState().index === 3
                    ? IMAGES.active.user
                    : IMAGES.inactive.user
                }
              />
            ),
            ...screenOptions,
          };
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <SneakersContext>
        <FavoritesContextProvider>
          <CartContext>
            <StatusBar backgroundColor="#eeee" barStyle="light-content" />
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={Main}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Cart"
                component={Cart}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ViewSneaker"
                options={{headerShown: false}}
                component={ViewSneaker}
              />
              <Stack.Screen
                name="FavoriteList"
                options={{headerShown: false}}
                component={FavoriteLIst}
              />
            </Stack.Navigator>
          </CartContext>
        </FavoritesContextProvider>
      </SneakersContext>
    </NavigationContainer>
  );
}
