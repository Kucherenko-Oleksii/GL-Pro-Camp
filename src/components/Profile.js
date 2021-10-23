import * as React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

function Lists(){
  return(
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.text}>A later will be are lists of exercises performed</Text>
    </SafeAreaView>
  );
}
function Exercises(){
  return(
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.text}>In the future, there will be a list of exercises that need to be performed today</Text>
    </SafeAreaView>
    
  );
}
function MyProfile() {
  return (
    <SafeAreaView style = {styles.container}> 
      <MaterialCommunityIcons name="selection-drag" size={70} color="black" />
      <Text style = {styles.text}>There will be an opportunity able to download photos from your phone, 
        as well view as some user characteristics, such as (Height, weight, etc.)</Text>
    </SafeAreaView>
  );
}
function SettingsScreen() {
  return (
    <SafeAreaView>
      <Text style = {styles.text}>Will be different types of settings</Text>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: true,
          tabBarActiveTintColor: '#e91e63',
          tabBarIcon: () => {
            if (route.name === 'My Profile') {
              return <MaterialCommunityIcons name="face-profile" size={24} color="black" />;
            } 
            else if(route.name === 'List of completed exercises'){
              return <FontAwesome name="list-ul" size={24} color="gray" />;          
            }
            else if(route.name === 'Exercises for today'){
              return <MaterialIcons name="rule" size={24} color="black" />;
            }
            else if (route.name === 'Settings') {
              return <AntDesign name="setting" size={24} color="black" />;
            }   
          },
        })}
      >
      <Tab.Screen name="My Profile" component={MyProfile} />
      <Tab.Screen name="List of completed exercises" component={Lists} options={{ tabBarBadge: 3 }} />
      <Tab.Screen name="Exercises for today" component={Exercises}  options={{ tabBarBadge: 5 }} />
      <Tab.Screen name="Settings" component={SettingsScreen}  options={{ tabBarBadge: 1 }} />     
    </Tab.Navigator>
  );
}

export default function App() {
  return (   
      <MyTabs /> 
  );
}

const styles = StyleSheet.create({
  container:
  {
    flex:1
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
  }
});