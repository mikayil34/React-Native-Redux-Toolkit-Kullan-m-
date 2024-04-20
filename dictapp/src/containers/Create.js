import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Style } from "../../Style";
import ModalView from './ModalView';
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useDispatch } from 'react-redux';
import {  setmodul } from '../stor/Slice';

export default function Create() {

  const dispatch = useDispatch();
  

  return (
    <View style={Style.createButton}>
      <View style={Style.circle}>
        <TouchableOpacity onPress={()=>dispatch(setmodul(true))}>
          <Ionicons name="md-add" size={50} color="white" />
        </TouchableOpacity>
      </View>
      <ModalView   />
    </View>
  )
}
