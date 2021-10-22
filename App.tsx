import  React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import MainStack from './navigate';

export default function App() {
  return (
      <MainStack /> 
  );
}

const styles =  StyleSheet.create({
   mainstyle:
   {
     backgroundColor: 'black'
   }
}) 