import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SearchScreen from './screens/SearchScreen';
import ResultsShowScreen from './screens/ResultsShowScreen';
import KayitScreen from './screens/KayitScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [username, setUsername] = useState('');

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitle: 'NeYesek',
          headerRight: () => (
            <View style={styles.headerRightContainer}>
              <Text style={styles.headerRightText}>{username}</Text>
            </View>
          ),
          headerTitleStyle: { color: 'black', fontWeight: 'bold', fontSize: 20 }, // Başlık için yazı tipi boyutu eklendi
        }}
      >
        <Stack.Screen name="Login">
          {props => <LoginScreen {...props} updateUsername={updateUsername} />}
        </Stack.Screen>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
        <Stack.Screen name="Kayit" component={KayitScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerRightContainer: {
    marginRight: 10,
  },
  headerRightText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18, 
  },
});
