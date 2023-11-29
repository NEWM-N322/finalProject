import {useState} from 'react';

import {Text, View, StyleSheet} from 'react-native';

import { TextInput, Button, List } from 'react-native-paper';


export default function DetailScreen() {
        return (
                <View style={styles.container}>
                 <Text>DetailScreen</Text>       
                </View>
                
        );
}


const styles = StyleSheet.create({
        container: {
                flex: 1,
 backgroundColor: '#fff',
 alignItems: 'center',
justifyContent: 'center',
        }
});