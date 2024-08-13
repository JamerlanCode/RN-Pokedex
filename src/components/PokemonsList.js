import React from 'react'
import { StyleSheet, ActivityIndicator , FlatList, Platform } from 'react-native'
import PokemonCard from './PokemonCard';

export default function PokemonsList(props) {
    const {isNext, pokemons, loadPokemons} = props;

    const loadMore = () => {
      loadPokemons();
    }

  return (
    <FlatList
    data={pokemons}
    numColumns={2}
    showsVerticalScrollIndicator={false}
    keyExtractor={(pokemon) => String(pokemon.id)}
    renderItem={({item}) => <PokemonCard pokemon={item}/> }
    contentContainerStyle = {styles.flatListContentContainer}
    onEndReached={loadMore}
    onEndReachedThreshold={0.1}
    ListFooterComponent={ isNext && (
      <ActivityIndicator size='large' color="#27c3db" style={styles.spinner} />
    )}
    />
  );
}

const styles = StyleSheet.create ({
  flatListContentContainer:{
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 50 : 0,
  },
  spinner:{
    marginTop:20,
    marginBottom: 100,
  }
});