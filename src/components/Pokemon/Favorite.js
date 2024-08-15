import React,{useEffect,useState} from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {AddPokemonFavoriteApi, isFavoritePokemonApi } from '../../api/favorite'

export default function Favorite(props) {
  const {id} = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  useEffect(() => {
    (async () => {
      try {
        const response = await isFavoritePokemonApi(id);
        setIsFavorite(response)
      } catch (error) {
        setIsFavorite(false);
      }
    })()
  }, [id])
  
  const AddFavorite = async () => {
        await AddPokemonFavoriteApi(id);
    };

  const RemoveFavorite = async () => {
    console.log("eliminando de favoritos");
  };

  return (
    <Icon name="heart" color="#fff" size={20} onPress={isFavorite ? RemoveFavorite : AddFavorite} style={{marginRight: 20, }}/>
  )
}