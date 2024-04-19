import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Store } from './src/stor';
import Counter from './src/component/Counter';
import Bar from './src/component/Bar';

export default function App() {
  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <Bar />
        <Counter />
      </View>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
