import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

//importing navigation container and navigation stack

//nav container
import { NavigationContainer } from '@react-navigation/native';

//nav stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//import two screens needed
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

//create the stack for navigation
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
