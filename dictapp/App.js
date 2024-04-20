
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Style } from "./Style";
import Create from "./src/containers/Create";
import Word from "./src/containers/Word";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import Stor from "./src/stor/Stor";

export default function App() {
  return (
    <Provider store={Stor}>

      <View style={Style.container} >
        <StatusBar style="auto" />
        <Word />
        <Create />
        
      </View>
    </Provider>
  );
}






