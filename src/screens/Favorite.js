import React from 'react'
import { View, Text, SafeAreaView, Button } from 'react-native'
import {getPokemonsFavoriteApi,} from '../api/favorite'

export default function Favorite() {

  const checkFavorites = async () => {
    const response = await getPokemonsFavoriteApi();
    console.log('====================================');
    console.log(response);
    console.log('====================================');
  }
  
  return (
    <SafeAreaView>
      <Button title="Obtener Favoritos" onPress={checkFavorites} />
    </SafeAreaView>
  )
}