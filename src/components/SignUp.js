import  React, { useState } from 'react';
import { SafeAreaView , View, StatusBar, TouchableOpacity, TextInput, ScrollView, Text, StyleSheet, Alert} from 'react-native';

export default function SignUp()
{
    const load = () => {
        Alert.alert("SignUp","Hello User!")
    }
    return(
    <SafeAreaView style = {styles.container}> 
      <ScrollView>
        <View style = {styles.views}>
            <Text style = {styles.text}>Registration form</Text>     
        </View>   
        <TextInput
            style={styles.inputs}
            placeholder = 'First Name'     
            placeholderTextColor = 'black'
            selectionColor = 'black'
            color = 'black'  
        />    
        <TextInput
            style={styles.inputs}
            placeholder='Last Name'
            placeholderTextColor = 'black'
            color = 'black'       
        />  
        <TextInput
            style={styles.inputs}
            placeholder='Email'
            placeholderTextColor = 'black'
            color = 'black'      
       />  
        <TextInput
            style={styles.inputs}
            placeholder='Password'
            placeholderTextColor = 'black'
            color = 'black'
            secureTextEntry = {true}
       /> 
       <TouchableOpacity style = {styles.signup} onPress = {load}>       
           <Text style = {styles.textsSingUp}>SignUp</Text>            
        </TouchableOpacity> 
        
       <StatusBar barStyle='dark-content'/>
       </ScrollView>
     </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,    
      },
    views:{
        alignItems: 'center',
        justifyContent: 'center' 
      },
    inputs: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',
        paddingLeft: 10,
        top: 50,       
      },
    
    text:
    {     
        fontSize: 40,     
        color: 'blue',
        shadowColor: 'gray',
        shadowRadius: 5,
        top: 30  
    },
    signup:
    {
      alignItems: 'center',
      justifyContent: 'center',
      height: 30,
      width: '60%',     
      marginBottom: 75,
      borderRadius: 10,
      marginLeft: 75,
      top: 70,
      backgroundColor: 'cornflowerblue' 
    }, 
    textsSingUp:
    {
      color: 'white'
    },
})