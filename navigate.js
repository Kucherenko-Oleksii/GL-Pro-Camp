import  React from 'react';
import Main from './components/Main';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import {StyleSheet, Image, View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SingUp from './components/SignUp';
import Forgot_password from './components/Forgot_password';

const Stack = createStackNavigator();

export default function Navigate() {
    return(  
        <NavigationContainer>          
        <Stack.Navigator>      
        <Stack.Screen
                name="Main"
                component = {Main}
                options = {{title: 'Fitness-Fox'}}
            />            
            <Stack.Screen
                name="Profile"
                component = {Profile}
                options = {{title: 'Profile'}}
            />
            <Stack.Screen
                name="SignUp"
                component = {SingUp}
                options = {{title: 'SignUp'}}
            />
            <Stack.Screen
                name="Forgot password"
                component = {Forgot_password}
                options = {{title: 'Forgot password'}}
            />
        </Stack.Navigator> 
        <Image source = {require('./components/images/photo.jpg')} style = {styles.img}/>  
    </NavigationContainer>
    );   
}

const styles = StyleSheet.create({
    container:
    {
      flex: 1,
      paddingTop: 20,
      backgroundColor: '#191919',
      alignItems: 'center',
      justifyContent: 'center'
    },
    img:
    {
      width: 56,
      height: 56,
      left: -1,
      position: 'absolute',
      marginLeft: 1
    },
    titles:
    {
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    }
});