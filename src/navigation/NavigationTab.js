import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Account from '../screens/Account';
import Favourite from '../screens/Favourite';
import Pokedex from '../screens/Pokedex';

const Tab = createBottomTabNavigator();

export default function NavigationTab(props) {
  return (
    <Tab.Navigator initalRouteName="Account">
        <Tab.Screen 
            name="Account" 
            component={Account} 
            options={{
                tabBarLabel: "Mi Cuenta",
                tabBarIcon: (color, size) => <Icon name="user" color={color} size={size}/>,
            }} 
        />
        <Tab.Screen name="Pokedex" component={Pokedex} />
        <Tab.Screen 
            name="Favourite" 
            component={Favourite} 
            options={{
                tabBarLabel: "Favoritos", 
                tabBarIcon: (color, size) => <Icon name="heart" color={color} size={size}/>,
            }}
        />
    </Tab.Navigator>
  )
}