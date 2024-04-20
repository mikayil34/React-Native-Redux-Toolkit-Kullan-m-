import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Style } from "../../Style";
import ModalView from './ModalView';
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function Create({ onpresHadler }) {

  return (
    <View style={Style.createButton}>
      <View style={Style.circle}>
        <TouchableOpacity onPress={onpresHadler}>
          <Ionicons name="md-add" size={50} color="white" />
        </TouchableOpacity>
      </View>
      <ModalView />
    </View>
  )
}
