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

        //testing purposes - logging out the route to see paths
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

                                //give an alert that you have signed out
                                Alert.alert("You have successfully signed out.");
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

        //create an arr. this arr is going to hold the "affirmations" as a list 
        const affirmations = [
                //format: {id: unique key, text: some text}
                {id: "Commencement." , text: "Today I will focus on what makes me feel good."},
                {id: "Gratitude." , text: "I bless the past and embrace the present moment with an open heart."},
                {id: "Health." , text: "My healthy mind promotes my optimum health."},
                {id: "Positivity." , text: "I am worthy of beautiful endings and exciting beginnings."},



        ]
        return (
                <View style={styles.container}>
                
                {/* welcome + ty for signing in w first name of user */}
                 <Text style={styles.header}>{`Thank you for signing in, ${userName}!`}</Text> 

                 {/* description text */}
                 <Text style={styles.description}>Here are affirmations of the day you can reflect on. </Text> 
                 <Text style={styles.loved}>Remember you are loved!</Text>

                 {/* iterate through the list of affirmation using the map func */}
                 {affirmations.map(item => (
                        <List.Item key={item.id} title ={item.id} description={item.text} style={styles.list} />
                 ))}

                 {/* btn that will redirect users to sign out and go back home*/}
                 <Button mode="contained" onPress={signUserOut} style={styles.button}>Sign Out</Button>    
                </View>
                
        )
}


const styles = StyleSheet.create({
         //container
         container: {
                flex: 1,      
                padding: 20,
                marginTop: 60,
        },

        //big header
        header : {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#59372b'
},

//description text
description: {
        fontSize: 18,
        marginBottom: 30
},

//loved text 
loved: {
        fontSize: 18,
        marginBottom: 20,
        fontWeight: 'bold'
},

//list 
list: {
        fontSize: 17,
        marginBottom: 10
},

 //button
 button: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#3f3832'
}
});