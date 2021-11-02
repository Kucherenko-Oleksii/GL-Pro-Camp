import  React from 'react';
import { SafeAreaView , View, StatusBar, TouchableOpacity, TextInput, ScrollView, Text, StyleSheet, Alert} from 'react-native';

export default function SingUp()
{
    const load = () => {
        Alert.alert("Fitness-Fox","The message was sent to your email addresslo User!")
    }
    return(
    <SafeAreaView style = {styles.container}> 
      <ScrollView>
        <View style = {styles.views}>
            <Text style = {styles.text}>Forgot password</Text>     
        </View>   
        <TextInput
            style={styles.inputs}
            placeholder = 'Email'     
            placeholderTextColor = 'black'
            selectionColor = 'black'
            color = 'black'  
        />    
       <TouchableOpacity style = {styles.signup} onPress = {load}>       
           <Text style = {styles.textsSingUp}>Send</Text>            
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