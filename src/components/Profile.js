import React, {useState} from 'react';
import { Text, StyleSheet,  FlatList, Image, View, TouchableOpacity, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

function Lists(){
  const [images, setimages] = useState([
    {src:require('./images/exercises1.png')},
    {src:require('./images/exercises2.png')},
    {src:require('./images/exercises3.png')}
  ]);
  return(   
    <SafeAreaView style = {styles.container}>  
      <Text style = {styles.text}>Exercises that are completed</Text>
     <FlatList 
        horizontal = {true}
        showsHorizontalScrollIndicator={true}
        data={images}
        renderItem={({item}) => (
            <Image 
                source={item.src}
                style={styles.imagestyle}
            />
        )}
    />
    
    </SafeAreaView>
  );
}
function Exercises(){


  const [images, setimages] = useState([
    {src:require('./images/today1.png')},
    {src:require('./images/today2.png')},
    {src:require('./images/today3.png')},
    {src:require('./images/today4.png')},
    {src:require('./images/today5.png')}
  ]);

  const deleteExercise = () => {
    delete(require('./images/today5.png'))

  }

    
  const[accepted, setAccepted] = useState(false)
  const loadAccept = () => {
  
  }
  return(
    <SafeAreaView style = {styles.container}>
      <View style = {styles.view}>
        <Text style = {styles.text}>Exercises to do today</Text>
      </View>
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
                  borderColor: accepted ? 'blue' : 'red' ,
                  resizeMode:'contain',
                  margin:10,
                  top: '22%'
                }}
            />
        )}
      />
      <TouchableOpacity style = {styles.accept}>       
           <Text style = {styles.textButton} onPress = {loadAccept}>Accept on exercises</Text>            
        </TouchableOpacity> 

        <TouchableOpacity style = {styles.cancel}>       
           <Text style = {styles.textButton} onPress = {deleteExercise}>Cancel exercises</Text>            
        </TouchableOpacity> 
        <ScrollView /> 
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
  const[isSelected, setSelection] = useState(false);
  const[isSelected2, setSelection2] = useState(false);
  const[isSelected3, setSelection3] = useState(false);

  const Message = () => {
    Alert.alert("Settings", "All settings are taken into account!")
  }

  return (
    <SafeAreaView>
      <ScrollView>
      <Text style = {styles.text}>Setting up exercises</Text>
      <Text style={{alignSelf: 'flex-start',marginTop: '20%', fontSize: 20 }}> Increase the number of exercises </Text>
      
      <CheckBox 
        value = {isSelected}
        onValueChange = {setSelection}
        style = {{  
          alignSelf: 'flex-end',
          bottom: '5%'
        }}      
      /> 
      <Text style={{alignSelf: 'flex-start',marginTop: '21%', fontSize: 20 }}>Receive notifications about new exercises </Text>
      <CheckBox 
        value = {isSelected2}
        onValueChange = {setSelection2}
        style = {{  
          alignSelf: 'flex-end',
          bottom: '5%'
        }}      
      /> 
      <Text style={{alignSelf: 'flex-start',marginTop: '22%', fontSize: 20 }}> Saving  your training results </Text>
      <CheckBox 
        value = {isSelected3}
        onValueChange = {setSelection3}
        style = {{  
          alignSelf: 'flex-end',
          bottom: '5%'
        }}      
      />
      <TouchableOpacity style = {styles.Apply} onPress = {Message}> 
         <Text style = {styles.buttonApply}>Apply</Text>
      </TouchableOpacity>
      </ScrollView>
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
  view:
  {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton:
  {
   left: 7,
   top: 4
  },
  buttonApply:
  {
    color: 'white'
  },
  Apply:
  {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: '60%',     
    marginBottom: 75,
    borderRadius: 10,
    marginLeft: 75,
    top: 15,
    backgroundColor: 'orange'
  },
  accept:
  {
    height: 30,
    width: '40%',     
    marginBottom: 15,
    borderRadius: 10,
    marginRight: '20%',
    top: '11.5%',
    backgroundColor: 'lightgreen' 
  },
  cancel:
  {
    height: 30,
    width: '33%',     
    marginBottom: 15,
    borderRadius: 10,
    marginLeft: '64%',
    top: '2%',
    backgroundColor: 'tomato' 
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
    top: 40,
    flexDirection: 'column',
    marginTop: 10,
  },
    imagestyle:
    {
      width:200,
      height:200,
      borderWidth:2,
      borderColor:'green',
      resizeMode:'contain',
      margin:10,
      top: '35%'
    }
});