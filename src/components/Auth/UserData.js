import React from 'react'
import { View, Text, StyleSheet,Button } from 'react-native'
import useAuth from '../../hooks/useAuth'

export default function UserData() {

  const {auth,logout} = useAuth();
  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido,</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title="Nombre Real" text={`${auth.firstName} ${auth.lastName}`}/>
        <ItemMenu title="Nombre Usuario" text={auth.username}/>
        <ItemMenu title="Email" text={auth.email}/>
        <ItemMenu title="Total Favoritos" text="0 Pokemones"/>
      </View>

      <Button title="Desconectarse" onPress={logout} style={styles.buttonLogout}/>
    </View>
  );
}
function ItemMenu(props){
  const {title, text} = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF"
  },
  itemMenuTitle:{
    fontWeight: "bold",
    paddingRight: 10,
    width: 130,
  },
  buttonLogout:{
    paddingTop: 20,
  },
})