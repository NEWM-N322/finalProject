//home screen

//import from react
import {useState} from 'react';

//import from react native
import {Text, View, StyleSheet, ScrollView, Alert} from 'react-native';

//import from react native paper
import { TextInput, Button, List } from 'react-native-paper';


//needs to have navigation in param
//this allows it to travel back and forth
export default function HomeScreen({navigation}) {
        

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
                label = "Username" />

               {/* password */}
               <TextInput
                style={styles.input}
                label= "Password"
                 secureTextEntry = {true}/>

                 {/* btn to sign in */}
                 <Button style={styles.button} mode="contained" title="Sign In">Sign In</Button>
                </View>

                {/* begin create acc content */}
                <View>
                {/* header of view */}
                <Text style={styles.redirection}>No account yet?</Text>
                <Text style={styles.signAcc}>Create an Account</Text>
                 {/* first name */}
               <TextInput
                style={styles.input}
                label = "First Name" />

                 {/* last name */}
               <TextInput
                style={styles.input}
                label = "Last Name" />

               {/* user email */}
               <TextInput
                style={styles.input}
                label = "Email Address" />

               {/* password */}
               <TextInput
                style={styles.input}
                label= "Create a Password"
                 secureTextEntry = {true}/>

                   {/* btn to create acc */}
                 <Button style={styles.button} mode="contained" title="Sign In">Create Account</Button>
                 
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