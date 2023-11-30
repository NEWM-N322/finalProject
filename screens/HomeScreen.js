//home screen

//import from react
import {useState} from 'react';

//import from react native
import {ActivityIndicator, Text, View, StyleSheet, ScrollView, Alert} from 'react-native';

//import from react native paper
import { TextInput, Button, List } from 'react-native-paper';

//importing all firebase configs
import {auth} from '../firebaseConfig';

import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";


//needs to have navigation in param
//this allows it to travel back and forth
export default function HomeScreen({navigation}) {
        //create necessary usestates

        //UseState cases: Signed in User

        //sign in email
        const [signInEmail, setSignInEmail] = useState();

         //sign in pw
         const [signInPW, setSignInPW] = useState();

         
        //UseState cases: Creating Account

          //create acc first name
          const [createAccFName, setCreateAccFName] = useState();

        //create acc first name
         const [createAccLName, setCreateAccLName] = useState();

        //create acc email
        const [createAccEmail, setCreateAccEmail] = useState();

        //create acc pw
        const [createAccPW, setCreateAccPW] = useState();

        //to simulate loading 
        //loading indicator
        const [loadingIndication, setLoadingIndication] = useState(false);

        const [userName, setUserName] = useState();

          //begin all necessary functions

        //for when a user signs in 
        //make this an async function
        const UserIsSignedIn = async () => {
        
                //turn on the loading indicator
                setLoadingIndication(true);
        
                //using a try catch block to make things easier
        
                //begin try
                try {
                //wait for the email and pw to be typed, authenticate it
                await signInWithEmailAndPassword(auth, signInEmail, signInPW).then((userCredential) => {

                        //console a success (testing purposes)
                        console.log("user is signed in");

                        //reset the values

                        //email
                        setSignInEmail("");

                        //pw
                        setSignInPW("");

                         //store the users first name from the form 
                                //set it = to whtv their fName value is
                                const userFirstName = createAccFName;

                                 // Store the user's name in a state variable (userName)
                                 setUserName(userFirstName);


                        //remove the loading indication
                        setLoadingIndication(false);

                        //navigate to details 
                        //grab the users name right when created
                        navigation.navigate("details",  { userName });
                })

                //internal catch block
                //if unsuccessful, send err msg 
                .catch((error) => {

                        //remove loading indication
                        setLoadingIndication(false);

                        //give an alert that there is an error
                        Alert.alert(error.message);

                        //console the err w msg
                        console.log("error:" ,error.message);
                })
                //begin catch
                } catch(error) {
                //display the err w a msg
                console.log("block error: " , error.message);
        
                }
        }

        //for when a user creates an acc
        const UserIsCreated = async () => {
                //turn on the loading indicator
                 setLoadingIndication(true);

                  //using a try catch block to make things easier
        
                //begin try
                try {
                        //wait for all necessary fields, authenticate it
                        await createUserWithEmailAndPassword(auth, createAccEmail, createAccPW).then((userCredential) => {
                                //once user gave info:

                                //console a success
                                console.log("user has been created");

                                //reset each value

                                //first name
                                setCreateAccFName("");

                                //last name
                                setCreateAccLName("");

                                //email
                                setCreateAccEmail("");

                                //pw
                                setCreateAccPW("");

                                //store the users first name from the form 
                                //set it = to whtv their fName value is
                                const userFirstName = createAccFName;

                                 // Store the user's name in a state variable (userName)
                                 setUserName(userFirstName);

                                //remove the loading indicator
                                setLoadingIndication(false);

                                //navigate to detail screen
                                //will save data from input
                                navigation.navigate("details", { userName: createAccFName});
                        })

                        .catch((error) => {
                        //remove loading indication
                        setLoadingIndication(false);

                        //give an alert that there is an error
                        Alert.alert(error.message);

                        //console the err w msg
                        console.log("error:" , error.message);
                        })

                        //begin catch
                } catch(error) {
                        //remove loading indication
                        setLoadingIndication(false);

                         //give an alert that there is an error
                         Alert.alert(error.message);

                        //console the err w msg
                        console.log("try error: ", error.message);
                }
       
  };
        
        //return the view
        return (
          //this will allow users to scroll
          <ScrollView>

        {/* container view w styling */}
        <View style={styles.container}>
                {/* text to welcome user */}
                <Text style={styles.header}>Affirmations Daily - Love Yourself!</Text>
                {/* sub description */}
                <Text style={styles.description}>This is a simple React Native Application to remind you about the importance of someone special: you!</Text>

                {/* begin sign in content */}
                <View style={styles.signView}>
                {/* header of view */}
               <Text style={styles.redirection}> Already have an account?</Text>
               <Text style={styles.signAcc}>Sign In</Text>

               {/* create inputs - user name + password */}

               {/* user name */}
               <TextInput
                style={styles.input}
                onChangeText={setSignInEmail}
                value={signInEmail}
                label = "Username" />

               {/* password */}
               <TextInput
                style={styles.input}secureTextEntry = {true}
                onChangeText={setSignInPW}
                value={signInPW}
                label= "Password" />

                 {/* btn to sign in */}
                 <Button style={styles.button} mode="contained" title="Sign In" onPress={UserIsSignedIn}>Sign In</Button>
                </View>

                 {/* loading animation */}
               <View>
                 <ActivityIndicator size="large" color="#aa7c57" animating={loadingIndication}/>
                 </View>

                {/* begin create acc content */}
                <View>
                {/* header of view */}
                <Text style={styles.redirection}>No account yet?</Text>
                <Text style={styles.signAcc}>Create an Account</Text>

                 {/* first name */}
               <TextInput
                style={styles.input}
                onChangeText={setCreateAccFName}
                value={createAccFName}
                label = "First Name" />

                 {/* last name */}
               <TextInput
                style={styles.input}
                onChangeText={setCreateAccLName}
                value={createAccLName}
                label = "Last Name" />

               {/* user email */}
               <TextInput
                style={styles.input}
                onChangeText={setCreateAccEmail}
                value={createAccEmail}
                label = "Email Address" />

               {/* password */}
               <TextInput
                style={styles.input}
                onChangeText={setCreateAccPW}
                value={createAccPW}
                label= "Create a Password"
                 secureTextEntry = {true}/>

                   {/* btn to create acc */}
                 <Button style={styles.button} mode="contained" title="Sign In" onPress={UserIsCreated}>Create Account</Button>
                 
                </View>
        </View>
          </ScrollView>
                
        );
}


const styles = StyleSheet.create({

        //container
        container: {
                flex: 1,      
                padding: 20,
                marginTop: 20,
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

//different views
signView: {
        marginBottom: 40
},

//begin acc creation
//redirection
redirection: {
        fontSize: 18,
        marginBottom: 10
},

//sign in / create acc
signAcc: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#483a3a'
},

//input boxes
input: {
        marginBottom: 10,
        marginTop: 20,
        backgroundColor: '#d1bcbc',
},

 //button
 button: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#3f3832'
}
});