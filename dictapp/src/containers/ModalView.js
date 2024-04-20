import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Style } from "../../Style";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux';
import { add, setLength, setmodul } from '../stor/Slice';


export default function ModalView() {
  const [englishValue, setEnglishValue] = useState('');
  const [turkishValue, setTurkishValue] = useState('');
  const dictionary = useSelector((state) => state.dictionary);
  const dispatch = useDispatch();
  useEffect(() => {

    console.log(dictionary.length);
    if (dictionary.isModel) {
      setEnglishValue('');
      setTurkishValue('');
    }


  }, [dictionary.isModel]);

  const saveHandler = () => {
   
    if (englishValue.trim() === '' || turkishValue.trim() === '') {
      return;
    }
    dispatch(add({
      id: dictionary.length + 1,
      en: englishValue,
      tr: turkishValue
     }))
     dispatch(setLength(dictionary.length + 1))
    dispatch(setmodul(false));
  }
  return (
    <Modal
      transparent
      animationType="slide"
      visible={dictionary.isModel}
      onRequestClose={() => dispatch(setmodul(false))}
    >
      <View style={Style.modal}>
        <TouchableOpacity style={Style.close} onPress={() => dispatch(setmodul(false))}>
          <Text style={Style.cross}>x</Text>
        </TouchableOpacity>

        <TextInput placeholder="English" style={Style.textBox}
          onChangeText={text => setEnglishValue(text)}
          value={englishValue}

        />
        <TextInput placeholder="Turkish" style={Style.textBox}
          onChangeText={text => setTurkishValue(text)}
          value={turkishValue}
        />

        <TouchableOpacity onPress={saveHandler}>
          <View style={Style.button}>
            <AntDesign name="heart" size={20} color="red" />
            <Text style={Style.buttonText}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}
