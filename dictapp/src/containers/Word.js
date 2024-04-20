import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'

import { AntDesign, Ionicons } from "@expo/vector-icons";
import Button from './Button';
import ButtonWhite from './ButtonWhite';


export default function Word({ word, length, count, decrement, increment }) {

  return (
    <>
      <View style={Style.word}>
        <View style={[Style.wordSegment]}>
          <Text style={Style.en}> {word.en} </Text>
          <Text style={Style.tr}>{word.tr}</Text>
        </View>
      </View>
      <View style={Style.buttonList}>
         <View style={Style.button}>
          </View>
          <View style={Style.button}>

            </View>

      </View>
    </>
  )
}
const Style = StyleSheet.create({
  buttonList: {
    flex: 1,
    width: "auto",
height: "auto", 

  },
  words: {
    fontSize: 60,
    fontWeight: "bold"
  },
  word: {
    flexDirection: "row",
    width: "90%", height: 200
  },
  wordSegment: {
    flex: 1,
    justifyContent: "center", alignItems: "center"
  },
  en: {
    fontWeight: "bold",
    fontSize: 40
  },
  tr: {
    fontWeight: "bold",
    fontSize: 25, color: "gray"
  },
});


