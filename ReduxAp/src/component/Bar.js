import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Presser from './Presser'
import { setAuter } from '../stor/slice'

export default function Bar() {
  const counter=useSelector((state)=>state.counter)
const dispatch=useDispatch();

  return (
    <View style={styles.container}>
      <Text>Adı:{counter.autor.name} </Text>
      <Text>Soyadı: {counter.autor.surName} </Text>
      <Presser text={"Kullanıcı Değiştir"} onPress={()=>dispatch(setAuter({name:"Ayşe Nur",surName:"Aktemur"}))}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})