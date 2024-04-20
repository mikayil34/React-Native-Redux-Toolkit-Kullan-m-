import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Style } from "../../Style";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../stor/Slice';
 

export default function Word() {
  const dictionary = useSelector((state) => state.dictionary);
  const dispatch = useDispatch();

  const word=dictionary.words[dictionary.count-1]; 
  if(!word){
    return <Text style={Style.words}>No word</Text>
  }
  return (
    <>
      <Text style={Style.words}>
        {dictionary.count}<AntDesign name="heart" size={40} color="red" />f
        <Text style={Style.current}>  {dictionary.length} </Text>
      </Text>

      <View style={Style.word}>
        <View style={Style.wordSegment}>
          <TouchableOpacity onPress={() => dispatch(decrement()) }>
            <AntDesign name="left" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={[Style.wordSegment, { flex: 3 }]}>
          <Text style={Style.en}> {word.en} </Text>
          <Text style={Style.tr}>{word.tr}</Text>
        </View>
        <View style={Style.wordSegment}>
          <TouchableOpacity onPress={() =>  dispatch(increment())}>
            <AntDesign name="right" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

