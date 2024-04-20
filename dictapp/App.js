 
import { Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"; 
import { Provider } from "react-redux";
import Stor from "./src/stor/Stor";
import Homescreen from "./src/screens/Homescreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WordScreen from "./src/screens/WordScreen";
import { Ionicons } from '@expo/vector-icons';
import NewWordScreen from "./src/screens/NewWordScreen";
import QuizScreen from "./src/screens/QuizScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={Stor}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen}
        options={{
          headerTitle: 'Anasayfa',
          headerRight: ({ tintColor }) => (
            <Pressable style={({ pressed }) => pressed && Style.pressed}
            //  onPress={authContex.logout} 
             >
              <Ionicons name="exit" size={24} color={tintColor} />
            </Pressable>
          )
  
  
        }}
        
        />
        <Stack.Screen name="Word" component={WordScreen} />
        <Stack.Screen name="NewWord" component={NewWordScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
      </Stack.Navigator>
    </NavigationContainer>

   
      {/* <View style={Style.container} >
        <StatusBar style="auto" />
        <Word />
        <Create />
        
      </View> */}
    </Provider>
  );
}
const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 25,
    paddingTop: 25,
    marginBottom: 25,
  },
  iconContainer: {
    marginHorizontal: 8,
    marginVertical: 2
  }, iconPressed: {
    opacity: 0.5
  }, pressed: {
    opacity: 0.5
  }
});






