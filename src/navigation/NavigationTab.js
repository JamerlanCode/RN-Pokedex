import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Account from '../screens/Account';
import Favourite from '../screens/Favourite';
import Pokedex from '../screens/Pokedex';

const Tab = createBottomTabNavigator();

export default function NavigationTab(props) {
  return (
    <Tab.Navigator initalRouteName="Account">
        <Tab.Screen name="Account" component={Account} />
        <Tab.Screen name="Pokedex" component={Pokedex} />
        <Tab.Screen name="Favourite" component={Favourite} />
    </Tab.Navigator>
  )
}