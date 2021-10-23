import  React from 'react';
import Main from './src/components/Main';
import Profile from './src/components/Profile';
import {StyleSheet, Image, View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigate() {
    return(  
        <NavigationContainer>    
        <Stack.Navigator>      
        <Stack.Screen
                name="Main"
                component = {Main}
                options = {{title: '\t\t\t\t\t\t' + 'Fitness-Fox'}}
            />            
            <Stack.Screen
                name="Profile"
                component = {Profile}
                optiopns ={{headerShown: false,}}      
            />
        </Stack.Navigator> 
        <Image source = {require('./src/components/images/photo.jpg')} style = {styles.img}/>  
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
    }
});