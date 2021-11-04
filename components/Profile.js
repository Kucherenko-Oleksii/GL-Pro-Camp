import  React from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';

export default function App({ route }) {
    return (
      <View style = {styles.container}>
          <Text>Hello</Text>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
  }) 
  