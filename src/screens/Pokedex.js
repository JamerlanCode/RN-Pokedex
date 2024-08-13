import React,{ useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { getPokemonsApi, getPokemonDetailsByUrlApi, loadMorePokemonsApi } from '../api/pokemon'
import PokemonsList from '../components/PokemonsList';

export default function Pokedex() {
  const [pokemons,setPokemons] = useState([]);
  const [nextUrl,setNextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })()
  },[]);

  const getFirstPokemons = async () => {
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

  const loadPokemons = async () => {
    try {
      var response = {};
      if (nextUrl === null) {
        console.log("entro por primera vez")
        response = await getPokemonsApi();
        setNextUrl(response.next);
      }
      else{
        console.log("ahora solo entro aca");
        response = await loadMorePokemonsApi(nextUrl);
        setNextUrl(response.next);
      }
      console.log(nextUrl);
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
      <PokemonsList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl} />
    </SafeAreaView>
  )
}