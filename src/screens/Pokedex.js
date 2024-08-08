import { View, Text } from 'react-native'
import React,{ useState, useEffect } from 'react'
import { getPokemonsApi } from '../api/pokemon'

export default function Pokedex() {

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })()
  },[]);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <View>
      <Text>Pokedex</Text>
    </View>
  )
}