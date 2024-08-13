import React from 'react'
import {Text, StyleSheet, SafeAreaView, Image, View } from 'react-native'
import {capitalize} from 'lodash'
import getColorByType from '../../utils/GetColorByType';

export default function Header(props) {
    const {name, order, type, image} = props;
    const color = getColorByType(type);

    const bgStyles = {backgroundColor: color, ...styles.bgStyles};

  return (
    <>
        <View style={bgStyles}/>
        <SafeAreaView style={styles.content}>
            <View style={styles.header}>
                <Text style={styles.name}>{capitalize(name)}</Text>
                <Text style={styles.order}>#{`${order}`.padStart(3,0)}</Text>
            </View>
            <View style={styles.contentImg}>
                <Image source={{uri:image}}  style={styles.image}/>
            </View>
        </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 300,
        resizeMode: "contain",
    },
    contentImg: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: 30,
    },
    bgStyles:{
        width: "100%",
        height: 400,
        position: "absolute",
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{scaleX: 2}],
    },
    content:{
        marginHorizontal: 30,
        marginTop: 30,
    },
    header:{
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: 'center',
        paddingTop: 30,
    },
    name:{
        marginTop: 20,
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 27,
    },
    order:{
        color: "#fff",
        fontWeight: 'bold',
    }

})