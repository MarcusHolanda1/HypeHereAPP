import React, {useContext} from 'react';
import 'react-native-gesture-handler';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import ViewSneaker from '../screens/ViewSneaker';
import FavoriteLIst from '../screens/FavoriteList';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SneakersContext} from '../contexts/SneakersContext';
import {FavoritesContextProvider} from '../contexts/FavoriteContext';
import {IconGlobal} from '../design';
import IMAGES from '../assets';
import {createStackNavigator} from '@react-navigation/stack';
import {SpanIcon} from '../design';
import {FavoritesContext} from '../contexts/FavoriteContext';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarLabelStyle: {
    display: 'none',
  },
};

const Stack = createStackNavigator();

function Main() {
  const {favoriteList} = useContext(FavoritesContext);

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
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
        name="Cart"
        component={Cart}
        options={({navigation}) => {
          return {
            tabBarIcon: () => (
              <IconGlobal
                source={
                  navigation.getState().index === 1
                    ? IMAGES.active.cart
                    : IMAGES.inactive.cart
                }
              />
            ),
            ...screenOptions,
          };
        }}
      />
      <Tab.Screen
        name="FavoriteList"
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
      <Tab.Screen name="User" component={Home} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <SneakersContext>
        <FavoritesContextProvider>
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
        </FavoritesContextProvider>
      </SneakersContext>
    </NavigationContainer>
  );
}
