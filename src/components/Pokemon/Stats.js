import React from 'react'
import {StyleSheet, View, Text } from 'react-native'
import {map, capitalize} from 'lodash'

export default function Stats(props) {
    const {stats} = props;

    const barStyles =(number) => {
        let bgColorized;

        if (number <= 25) {
        bgColorized = "#ff3e3e";
        } else if (number > 25 && number < 50) {
        bgColorized = "#F08700";
        } else if (number >= 50 && number < 75) {
        bgColorized = "#EFCA08";
        } else if (number >= 75) {
        bgColorized = "#6EEB83";
        }
        return {
            backgroundColor: bgColorized,
            width: `${number}%`
        }
    }
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Estadisticas Base</Text>
      {map(stats,(item,index)=> (
        <View key={index}  style={styles.block}>
            <View style={styles.blockTitle}>
                <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
            </View>
            <View style={styles.blockInfo}>
                <Text style={styles.number}>{item.base_stat}</Text>
                <View style={styles.bgBar}>
                    <View style={[styles.bar, barStyles(item.base_stat)]}/>
                </View>
            </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    content:{
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 80,
    },
    title: {
        fontWeight: "bold",
        fontSize: 25,
        paddingBottom: 5,
    },
    block:{
        flexDirection: 'row',
        paddingVertical: 5,
    },
    blockTitle:{
        width: "40%"
    },
    statName:{
        fontSize: 12,
        color: "#6b6b6b"
    },
    blockInfo:{
        width: "60%",
        flexDirection: "row",
        alignItems: "center",
    },
    number:{
        width: "12%",
        fontSize : 12,
    },
    bgBar:{
        backgroundColor: "#dedede",
        width: "88%",
        height: 5,
        borderRadius: 20,
        overflow: 'hidden',
    },
    bar:{
        height: 5,
        borderRadius: 20,
    },
})