import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.backgraoundStyle}>
      <AntDesign style={styles.iconStyle} name="search1" size={30} color="black" />
     <TextInput style={styles.inputStyle} placeholder="Ara" autoCorrect={false} autoCapitalize='none' />
   </View>

  );
}

const styles = StyleSheet.create({
  backgraoundStyle: {
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    margin: 10,
    height:50,
    alignItems: 'center'
    flex: 1, 
    justifyContent: 
    alignItems,
    borderRadius:20,
  },
  iconStyle:{
    marginHorizontal:15,

  },
  inputStyle : {
    flex:1,
    fontSize:18,
  },
});