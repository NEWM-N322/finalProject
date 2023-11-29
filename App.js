import { StatusBar } from 'expo-status-bar';

//import from react-native
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

//importing navigation container and navigation stack

//nav container
import { NavigationContainer } from '@react-navigation/native';

//nav stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import two screens needed

//home screen
import HomeScreen from './screens/HomeScreen';

//detail screen
import DetailScreen from './screens/DetailScreen';

//create the stack for navigation
const Stack = createNativeStackNavigator();


//export the app function
export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="home" component={HomeScreen}/>
          <Stack.Screen options={{headerShown: false}} name="details" component={DetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  
  );
}


//begin stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
});

