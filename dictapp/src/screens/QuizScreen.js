import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function QuizScreen() {
  const question = "What is the capital of France?";
  const options = ["London", "Paris", "Berlin", "Madrid"];

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{question}</Text>
      </View>
      <View style={styles.optionsContainer}>
        <View style={styles.optionsBox}>
          {options.map((option, index) => (
            <TouchableOpacity key={index} style={styles.optionButton}>
              <Text style={styles.optionText}>{String.fromCharCode(97 + index)}) {option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  questionContainer: {
    width: '80%',
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    height: 250,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left', // Metni sola yasla
    textAlignVertical: 'center', // Dikeyde ortalama
    flex: 1, // Yükseklik boyutunu alırken kullanılan bir stil
  },
  optionsContainer: {
    alignItems: 'center',
    width: '80%',
  },
  optionsBox: {
    width: '100%', 
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  optionButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  optionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
