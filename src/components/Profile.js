import React, {useState} from 'react';
import { Text, StyleSheet,  FlatList, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

function Lists(){
  const [images, setimages] = useState([
    {src:require('./images/exercises1.png')},
    {src:require('./images/exercises2.png')},
    {src:require('./images/exercises3.png')}
  ]);
  return(   
    <SafeAreaView style = {styles.container}>  
     <FlatList 
     
        horizontal = {true}
        showsHorizontalScrollIndicator={true}
        data={images}
        renderItem={({item}) => (
            <Image 
                source={item.src}
                style={{
                    width:200,
                    height:200,
                    borderWidth:2,
                    borderColor:'green',
                    resizeMode:'contain',
                    margin:8
                }}
            />
        )}
    />
    
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
      <Text style = {styles.text}>Age: 20</Text>
      <Text style = {styles.text}>Weight: 78kg</Text>
      <Text style = {styles.text}>Height: 1.82m</Text>
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
    marginVertical: 10,
    marginRight: 15,
    marginLeft: 15,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 10,
    paddingVertical: 10,
    top: 60,
    flexDirection: 'column',
    marginTop: 10
  },
  imageexercises1:
    {
      width: 130,
      height: 100,
      bottom: '75%',
      left: 5
    },
    imageexercises2:
    {
      width: 130,
      height: 100,
      bottom: 50,
      left: 20
    },
    imageexercises3:
    {
      width: 130,
      height: 100,
      bottom: 70,
      left: 30
    }
});