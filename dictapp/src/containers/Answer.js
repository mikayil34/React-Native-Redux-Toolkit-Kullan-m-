import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Answer({answer,questionId,quizHanler,isDisabled}) {
  
    
    return ( 
        <TouchableOpacity 
        style={styles.optionButton} 
        onPress={quizHanler}
        disabled={isDisabled} 
        >
          <Text style={styles.optionText}>{answer.tr}</Text>
        </TouchableOpacity>
      )
}

const styles = StyleSheet.create({
    optionButton: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 10,
        width: 350,
      },
      optionText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
})