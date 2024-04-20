import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function Button({ children, onPress, style}) {
    return (
        
        <Pressable style={({ pressed }) => [styles.button,
        pressed && styles.pressed,style
        ]}
            onPress={onPress}
        >
            <View>
                <Text style={styles.text}>{children}</Text>
            </View> 
        </Pressable>
      
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue', 
        borderRadius: 10,  
        padding: 20, 
    },
    pressed: {
        opacity: 0.5,

    }, text: {
        textAlign: 'center',
        color: 'blue',
        fontSize: 16,
        fontWeight: 'bold',

    },
    container: {
      flex: 1,
    }, 
    border: {
      borderWidth: 1,
      borderColor: '#7F91A7',
    },
    content: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      marginRight: 12,
    },
    text: {
      letterSpacing: 1,
      fontSize: 12,
      color: 'white',
    },
    secondaryText: {
      letterSpacing: 1,
      fontSize: 12,
      color: '#7F91A7',
    },
  });