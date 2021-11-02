import React from 'react'
import {StyleSheet,  SafeAreaView, TextInput} from 'react-native';

export default function Inputs()
{
    return(
    <SafeAreaView style = {styles.container}>
        <TextInput
            style={styles.inputs}
            placeholder = 'Login'     
            placeholderTextColor = 'black'
            selectionColor = 'black'
            color = 'black'  
        />    
        <TextInput
            style={styles.inputs}
            placeholder='Password'
            placeholderTextColor = 'black'
            color = 'black'
            secureTextEntry = {true}
      />  
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,     
      },
    inputs: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        paddingLeft: 45,
        bottom: 30,       
      }
})
