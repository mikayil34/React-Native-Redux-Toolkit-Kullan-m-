import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Style } from "../../Style";
import ModalView from './ModalView';
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function Create({ setModal, ...props}) {
  return (
    <View style={Style.createButton}>
      <View style={Style.circle}>
        <TouchableOpacity onPress={() => setModal(true)}>
          <Ionicons name="md-add" size={50} color="white" />
        </TouchableOpacity>
      </View>
      <ModalView {...props} />
    </View>
  )
}
 