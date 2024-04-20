import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Style } from "../../Style";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux';
import { add, setdata, setmodul } from '../stor/Slice';
import { WORDS } from '../data/seedData';


export default function ModalView() {
  const [englishValue, setEnglishValue] = useState('');
  const [englishTextValue, setEnglishTextValue] = useState('');
  const [turkishValue, setTurkishValue] = useState('');
  const [turkishTextValue, setTurkishTextValue] = useState('');
  const { length, isModel } = useSelector((state) => state.dictionary);
  const dispatch = useDispatch();
  useEffect(() => {

    if (isModel) {
      setEnglishValue('');
      setTurkishValue('');
    }

  }, [isModel]);
  

  const saveHandler = () => {

    if (englishValue.trim() === '' || turkishValue.trim() === '') {
      return;
    }
    dispatch(add({ 
      en: englishValue,
      tr: turkishValue,
      trtext: turkishTextValue,
      enText: englishTextValue
    }))
    dispatch(setmodul(false));
  }
  return (
    <Modal
      transparent
      animationType="slide"
      visible={isModel}
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
        <TextInput placeholder="TurkishText" style={Style.textBox}
          onChangeText={text => setTurkishTextValue(text)}
          value={turkishTextValue}
        />
        <TextInput placeholder="EnglishText" style={Style.textBox}
          onChangeText={text => setEnglishTextValue(text)}
          value={englishTextValue}
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
