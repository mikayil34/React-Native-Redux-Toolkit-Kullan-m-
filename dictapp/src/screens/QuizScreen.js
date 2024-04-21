import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Questin from '../containers/Questin';
import { useDispatch, useSelector } from 'react-redux';
import { generateRandomNumber } from '../helper/randomNumber';
import { setQuiz } from '../stor/Slice';

export default function QuizScreen() { 
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const dictionary = useSelector((state) => state.dictionary);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(dictionary.quiz.length);
    if (dictionary.quiz.length == 0) {


      const randomlist = [];
      const newWords = [];
      const words = dictionary.words;

      for (let i = 1; i <= 25; i++) {
        let randomNumber;
        do {
          randomNumber = generateRandomNumber(1, dictionary.length);
        } while (randomlist.includes(randomNumber));
        randomlist.push(randomNumber);
        const word = words[randomNumber];
        if (word) {
          newWords.push(word);
        }
        if (newWords.length >= 20) {
          break;
        }
      }

      const newQuizList = [];
      for (let i = 0; i < newWords.length; i++) {
        const randomStatus = generateRandomNumber(1, 4);
        const quiz = {
          order: i,
          question: newWords[i],
          questionId: newWords[i].id,
          statusType: randomStatus,
          answer: []
        };
        const randomAnswerList = [];
        randomAnswerList.push(i); // to prevent duplicate answer indices
        for (let j = 0; j < 4; j++) {
          let randomNumber;
          do {
            randomNumber = generateRandomNumber(0, 19);
          } while (randomAnswerList.includes(randomNumber));
          randomAnswerList.push(randomNumber);
          const answerWord = newWords[randomNumber]; 
          quiz.answer.push(answerWord);
        }
        newQuizList.push(quiz);
      }
      dispatch(setQuiz(newQuizList));
    }
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

function quizHanler(){
  setIsDisabled(true);
  setTimeout(() => {
    setCount(count + 1);
    setIsDisabled(false);
  }, 1000);
}
  return (
    <View style={styles.container}>
      <Questin word={dictionary.quiz[count]} isDisabled={isDisabled}  quizHanler={quizHanler} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
