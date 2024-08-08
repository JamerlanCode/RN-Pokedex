import React from 'react'
import {createStackNavigator } from '@react-navigation/stack'
import Favourite from '../screens/Favourite';

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="Favourite" 
            component={Favourite}
            options={{ headerTitle: "Favoritos"}} 
        />
    </Stack.Navigator>
  )
}