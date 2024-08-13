import React from 'react'
import { capitalize } from 'lodash'
import { View, Text, StyleSheet,Image,TouchableWithoutFeedback } from 'react-native'
import { useNavigation} from '@react-navigation/native'
import getColorByType from '../utils/GetColorByType';

export default function PokemonCard(props) {
    const {pokemon} = props;
    const navigation = useNavigation();

    const pokemonColor = getColorByType(pokemon.type);
    const bgStyles = {backgroundColor: pokemonColor, ...styles.bgStyles};

    const goToPokemon = () => {
        console.log(`vamos al pokemon ${pokemon.name}`)
        navigation.navigate('Pokemon',{id: pokemon.id});
    }
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
        <View style={styles.card}>
            <View style={styles.spacing}>
                <View style={bgStyles}>
                    <Text style={styles.number}>#{`${pokemon.order}`.padStart(3,0)}</Text>
                    <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
                    <Image source={{uri: pokemon.image}} style={styles.image}/>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    card:{ 
        height: 130,
        flex: 1,
    },
    spacing:{
        flex:1,
        padding: 5,
    },
    bgStyles:{
        flex: 1,
        borderRadius: 5,
        padding: 10,
    },
    image:{
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 90,
        height: 90,
    },
    name:{
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 10,
        color: '#fff'
    },
    number:{
        right:10,
        top: 10,
        color: '#fff',
        fontSize: 11,
        position: 'absolute',
    },
})