import React from 'react'
import { Image } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5';
import FavoriteNavigation from './FavoriteNavigation';
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';

const Tab = createBottomTabNavigator();

export default function NavigationTab(props) {
  return (
    <Tab.Navigator initalRouteName="Account" screenOptions={{headerShown: false}} >
        <Tab.Screen 
            name="Account Tab" 
            component={AccountNavigation} 
            options={{
                tabBarLabel: "Mi Cuenta",
                tabBarIcon: (color) => <Icon name="user" color={color} size={20}/>,
            }} 
        />
        <Tab.Screen 
            name="Pokedex Tab" 
            component={PokedexNavigation}
            options = {{
                tabBarLabel: "Pokedex",
                tabBarIcon: () => renderPokeball()
            }} />

        <Tab.Screen 
            name="Favourite Tab" 
            component={FavoriteNavigation} 
            options={{
                tabBarLabel: "Favoritos", 
                tabBarIcon: (color) => <Icon name="heart" color={color} size={20}/>,
            }}
        />
    </Tab.Navigator>
  )
}

function renderPokeball () {
    return (
        <Image 
            source = {require('../../assets/pokeball.png')}
            style = {{width: 75, height:75, top: -20}}
        />    
     )
}