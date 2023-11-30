//detail screen

//import from react
import {useState} from 'react';

//import from react native
import {Text, View, StyleSheet, Alert} from 'react-native';


//import from react native paper
import { TextInput, Button, List } from 'react-native-paper';

//import configs from firebase
import {auth} from "../firebaseConfig";
import { signOut } from "firebase/auth";

//add a navigation in param
//travels back to home page
//grabs the stored users name in form
export default function DetailScreen({route, navigation}) {

        console.log(route);
        //grab the users first name from nav params
        const {userName} = route.params;
        //func to sign a user out
        const signUserOut = () => {
                //using a try catch block

                //begin try
                try {
                        //using the sign out func from firebase
                        signOut(auth).then(() => {
                                //once user is ready to log off:

                                //console success
                                console.log("user is signed out");

                                //navigate back to home screen
                                navigation.navigate("home");
                        })

                        //internal catch block
                        //if unsuccessful, send err msg
                        .catch((error) => {

                                //give an alert of msg
                                Alert.alert(error.message);

                                //console error msg
                                console.log("error: " , error.message);
                        })

                //begin catch
                } catch (error) {
                        //display err w msg
                        console.log("try error: " , error.message);
                }
        }
        return (
                <View style={styles.container}>
                 <Text>{`Thank you for signing in, ${userName}`}</Text>   
                 <Button mode="contained" onPress={signUserOut}>Sign Out</Button>    
                </View>
                
        )
}


const styles = StyleSheet.create({
        container: {
                flex: 1,
 backgroundColor: '#fff',
 alignItems: 'center',
justifyContent: 'center',
        }
});