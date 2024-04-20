import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Word from '../containers/Word';
import { decrement, increment } from '../stor/Slice';

export default function WordScreen() {
    const dictionary = useSelector((state) => state.dictionary);
    const dispatch = useDispatch();
    const word = dictionary.words[dictionary.count - 1];

    if (!word) {
        return <Text style={styles.words}>No word</Text>
    }
    return (
        <View style={styles.container}>
            <Word word={word}
                length={dictionary.length}
                count={dictionary.count}
                decrement={() => dispatch(decrement())}
                increment={() => dispatch(increment())}

            />
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    
})