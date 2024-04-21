import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LoadingSpinner from './LoadingSpinner';
import Answer from './Answer';

export default function Questin({ word,quizHanler ,isDisabled}) {
  if (word && word.question) {

    function renderAnswerItem(itemData) { 
      return(
       
         <Answer  answer={itemData.item} isDisabled={isDisabled}  questionId={word.questionId} quizHanler ={quizHanler}/> 
      )

    }
    return (
      <View style={styles.container}>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{word.question.en}  </Text>
        </View>
        <View style={styles.optionsContainer}>
          <View style={styles.optionsBox}>
            <FlatList
              data={word.answer}
              renderItem={renderAnswerItem}
              keyExtractor={(item) => item.id} 
            />
 
          </View>
        </View>
        <View style={styles.loading}>
        {
          isDisabled && <LoadingSpinner/>
        }
          </View>
        
      </View>
    )
  } else {
    return <LoadingSpinner />
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
    width: '100%',

  }, 
  loading: {
    width: '100%', 
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    height: 250,

  },
  questionContainer: {
    width: '100%',
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
    width: '100%',
  },
  optionsBox: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  } 
});