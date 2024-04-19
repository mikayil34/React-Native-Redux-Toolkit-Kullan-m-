import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import react from 'react';
import Presser from './Presser';
import { increment, decrement, refresh } from '../stor/slice';
export default function Counter() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  react.useEffect(() => {
    console.log(counter);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{counter.count}</Text>
    <Presser text={"increment"} onPress={()=> dispatch(increment())}/> 
    <Presser text={"decrement"} onPress={()=> dispatch(decrement())}/> 
    <Presser text={"refresh"} onPress={()=>dispatch(refresh())}/> 
    </View>
  )
}

const styles = StyleSheet.create({
   
  container: { 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#aeaeae',  
  },
  count: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'white',
  }
});