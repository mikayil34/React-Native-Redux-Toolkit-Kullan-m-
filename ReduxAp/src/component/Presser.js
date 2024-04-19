import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Presser({text,onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ff0000',
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    }

})