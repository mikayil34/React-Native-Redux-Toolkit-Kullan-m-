import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Style } from "../../Style";
import { AntDesign, Ionicons } from "@expo/vector-icons";


export default function Word({}) {
  return (
    <>
    <Text style={Style.words}>
      2 <AntDesign name="heart" size={40} color="red" />f
      <Text style={Style.current}> 100</Text>
    </Text>

    <View style={Style.word}>
      <View style={Style.wordSegment}>
        <TouchableOpacity onPress={() => {}}>
          <AntDesign name="left" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={[Style.wordSegment, { flex: 3 }]}>
        <Text style={Style.en}> Arbitrary </Text>
        <Text style={Style.tr}>Rastgele</Text>
      </View>
      <View style={Style.wordSegment}>
        <TouchableOpacity onPress={() => {}}>
          <AntDesign name="right" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  </>
  )
}

 