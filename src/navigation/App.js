import React from 'react';
import 'react-native-gesture-handler';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import ViewSneaker from '../screens/ViewSneaker';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SneakersContext} from '../contexts/SneakersContext';
import {FavoritesContextProvider} from '../contexts/FavoriteContext';
import {IconGlobal} from '../design';
import IMAGES from '../assets';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarLabelStyle: {
    display: 'none',
  },
};

const Stack = createStackNavigator();

function Main() {
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
      <Tab.Screen name="Favorites" component={Home} />
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
          </Stack.Navigator>
        </FavoritesContextProvider>
      </SneakersContext>
    </NavigationContainer>
  );
}
