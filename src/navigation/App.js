import React from 'react';

import Home from '../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SneakersContext} from '../contexts/SneakersContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SneakersContext>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
      </SneakersContext>
    </NavigationContainer>
  );
}
