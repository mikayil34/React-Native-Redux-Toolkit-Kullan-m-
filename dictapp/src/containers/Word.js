import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Box from './Box';

const BOX_WIDTH = 350;
const BOX_HEIGHT = 200;


export default function Word({ word, length, count, decrement, increment }) {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "blue" }}>
        {word.en.toUpperCase()}
      </Box>
      <Box style={{ backgroundColor: "green" }}>
        {word.tr.toUpperCase()}
      </Box>
      <Box style={{ backgroundColor: "white" }}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={()=>decrement()}>
            <Text style={styles.buttonText}>Geri</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>increment()}>
            <Text style={styles.buttonText}>İleri</Text>
          </TouchableOpacity>
        </View>
      </Box> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',

  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    marginRight: 10,
    width: 100,
    height: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
