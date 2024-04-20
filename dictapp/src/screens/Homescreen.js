import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react' 
import Grid from '../containers/Grid';
import { WORDS } from '../data/seedData';
import { add } from '../stor/Slice';
import { useDispatch } from 'react-redux';

export default function Homescreen({ navigation }) {
    const dispatch = useDispatch();
    useEffect(() => {
        var words = WORDS;
        words.map((word) => {
          dispatch(add({ 
            en: word.en,
            tr: word.tr,
            trtext: word.trtext,
            enText: word.enText 
          }))
        });
        // dispatch(setdata(words));
    
    
      }, [WORDS]);
    function newWordHandler() {
        navigation.navigate('NewWord');
    }

    function pressHandler() {
        navigation.navigate('Word');
    }

    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Grid title="Kelime Çalış" color="yellow" pressHandler={pressHandler} />
                <Grid title="Soru Çöz" color="green" pressHandler={pressHandler} />
                <Grid title="Kelime Ekle" color="blue" pressHandler={newWordHandler} />
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    }, button: {
        flex: 1,
        alignContent: "center",
        margin: 20
    }


})