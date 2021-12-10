import React from 'react';

import Home from '../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {SneakersContext} from '../contexts/SneakersContext';
import {IconGlobal} from '../design';
import IMAGES from '../assets';
import Theme from '../design/theme';

const Tab = createBottomTabNavigator();

const screenOptions = {
  // tabBarActiveTintColor: Theme.colors.primary,
  // tabBarInactiveTintColor: Theme.colors.background,
  // tabBarStyle: {
  //   backgroundColor: Theme.colors.white,
  //   borderTopColor: Theme.colors.white,
  // },
  tabBarLabelStyle: {
    display: 'none',
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <SneakersContext>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={({navigation}) => {
              return {
                tabBarIcon: () => (
                  <IconGlobal
                    source={
                      navigation.getState().index === 1
                        ? IMAGES.inactive.home
                        : IMAGES.active.home
                    }
                  />
                ),
                ...screenOptions,
              };
            }}
          />
          <Tab.Screen name="Cart" component={Home} />
          <Tab.Screen name="Favorites" component={Home} />
          <Tab.Screen name="User" component={Home} />
        </Tab.Navigator>
      </SneakersContext>
    </NavigationContainer>
  );
}
