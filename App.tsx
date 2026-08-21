import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style ={styles.text}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7a1111',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    color: '#fff',
    fontSize: 48,
    textAlign: 'center',
    marginHorizontal: 20,
    fontWeight: 'bold',
  }
});
