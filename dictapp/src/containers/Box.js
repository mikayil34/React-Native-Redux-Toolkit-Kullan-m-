import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const BOX_WIDTH = 350;
const BOX_HEIGHT = 200;
export default function Box({children,style,boxWidth,boxHeight}) {

  if(boxWidth){
    BOX_WIDTH = boxWidth;
  }
  if(boxHeight){
    BOX_HEIGHT = boxHeight;
  }
  
  return (
    <View style={[styles.box, style]}>
    <Text style={styles.text}>{children}</Text>
  </View>
    
  )
}

const styles = StyleSheet.create({
  box: {
    width: BOX_WIDTH,
    height: BOX_HEIGHT,
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }, text: {
    color: 'white',
    textAlign: 'center',
  },
})