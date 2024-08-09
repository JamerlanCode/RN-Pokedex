import React,{ useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon'
import PokemonsList from '../components/PokemonsList';

export default function Pokedex() {
  const [pokemons,setPokemons] = useState([]);
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })()
  },[]);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      const pokemonsarray =[];

      for await(const pokemon of response.results) {
        const pokemonsDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        
        pokemonsarray.push({
          id: pokemonsDetails.id,
          name: pokemonsDetails.name,
          type: pokemonsDetails.types[0].type.name,
          order: pokemonsDetails.order,
          image: pokemonsDetails.sprites.other['official-artwork'].front_default

        })
        
      }
      setPokemons([...pokemons,...pokemonsarray]);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView>
      <PokemonsList pokemons={pokemons} />
    </SafeAreaView>
  )
}