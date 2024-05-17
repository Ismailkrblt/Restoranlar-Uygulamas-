import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './screens/SearchScreen';
import ResultsShowScreen from './screens/ResultsShowScreen';
import RegisterScreen from './screens/RegisterScreen'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; // 'AsyncStorage' modülünü doğru şekilde içe aktarın
const Stack = createNativeStackNavigator();

export default function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    console.log('Giriş yapıldı', name, surname, password);
    navigation.navigate('Search'); 
  };

  const handleRegister = async () => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify({ name, surname, password })); 
      console.log('Kayıt olundu', name, surname, password);
      navigation.navigate('Search'); 
    } catch (error) {
      console.error('Kayıt işlemi sırasında hata oluştu:', error);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{ headerTitle: 'Giriş' }}
        >
          {({ navigation }) => (
            <View style={styles.container}>
              <TextInput
                style={styles.input}
                placeholder="Adınız"
                value={name}
                onChangeText={(text) => setName(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Soyadınız"
                value={surname}
                onChangeText={(text) => setSurname(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Şifreniz"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <Button title="Giriş Yap" onPress={handleLogin} />
              <Button title="Kaydol" onPress={() => navigation.navigate('Register')} />
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Register"
          options={{ headerTitle: 'Kayıt Ol' }}
        >
          {(props) => <RegisterScreen {...props} handleRegister={handleRegister} />}
        </Stack.Screen>
        <Stack.Screen
          name="Search"
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.headerTitle}>
                <Text style={styles.headerTitleText}>NeYesek</Text>
                <Text style={styles.headerTitleText}>{name} {surname}</Text>
              </View>
            ),
          })}
        >
          {(props) => <SearchScreen {...props} name={name} surname={surname} />}
        </Stack.Screen>
        <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitleText: {
    fontSize: 18,
    fontWeight: 'bold', 
  },
});
