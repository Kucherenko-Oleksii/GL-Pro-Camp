import  React, { useState } from 'react';
import Inputs from './Inputs';
import { SafeAreaView , Image, StatusBar, TouchableOpacity, TextInput, ScrollView, Text, Button, StyleSheet, FlatList} from 'react-native';

export default function App({navigation}) {
     const loadScene = () => {
         navigation.navigate("Profile");
     }
     const loadSceneSignUp = () => {
        navigation.navigate("SignUp");
    }
    const loadForgotPassword = () => {
      navigation.navigate("Forgot password");
    }
    return (    
      <SafeAreaView  style = {styles.container}>
         <ScrollView style={styles.scrollView}>
        <Text style = {styles.text} numberOfLines = {10}>Welcome to the Fitness-Fox! {'\n'}Application, given application was designed to help the user monitor their physical health.
              {'\n'}For further work, log in. if you are not registered yet, please register</Text>       
      <Image source = {require('./images/login_icon.png')} style = {styles.imageLogin}/>
      <Inputs />
      <Image source={require('./images/pass_icon.png')} style = {styles.imagePassword}/>    
      <TouchableOpacity style = {styles.logbutton} onPress = {loadScene}  >       
           <Text style = {styles.texts}>LoGin</Text>            
        </TouchableOpacity>             
        <TouchableOpacity style = {styles.signup} onPress = {loadSceneSignUp}>       
           <Text style = {styles.texts}>SignUp</Text>            
        </TouchableOpacity> 
        <Text style = {styles.forgpass} onPress = {loadForgotPassword}>Forgot password?</Text>
       <StatusBar barStyle='dark-content'/> 
       </ScrollView>       
      </SafeAreaView >  
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,     
    },
    scrollView:
    {
      marginHorizontal: 20,
    },
    text:
    {
      color: 'black',
      fontSize: 17,
      marginVertical: 28,
      marginRight: 15,
      marginLeft: 15,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 10,
      paddingLeft: 15,
      paddingRight: 10,
      paddingVertical: 15
    },
    logbutton:
    {
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: '60%',     
        marginBottom: 75,
        borderRadius: 10,
        marginLeft: 75,
        bottom: 20,
        backgroundColor: 'coral'       
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
      bottom: 70,
      backgroundColor: 'cornflowerblue' 
    },
    forgpass:
    {
      color: 'blue',
      bottom: '15%',
      marginLeft: '35%'
    },
    texts:
    {
      color: 'white'
    },
    imageLogin:
    {
      width: 39,
      height: 38,
      top: 22,
      left: 12
    },
    imagePassword:
    {
      width: 39,
      height: 45,
      bottom: 83,
      left: 10
    }   
  }) 
  