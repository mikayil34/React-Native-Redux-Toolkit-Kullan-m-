
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Style } from "./Style";
import Create from "./src/containers/Create";
import Word from "./src/containers/Word";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <View
      style={[
        Style.container,
        { backgroundColor: !modal ? "white" : "rgba(37, 37, 37, 0.4)" },
      ]}
    >
      <StatusBar style="auto" />
      <Word />
      <Create setModal={setModal} />
    </View>
  );
}

 

 

 
