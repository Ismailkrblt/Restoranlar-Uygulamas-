import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './screens/SearchScreen';
import ResultsShowScreen from './screens/ResultsShowScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Giriş işlemini burada gerçekleştir
    // Örneğin, API'ye istek göndererek doğrulama yapabilirsiniz
    console.log('Giriş yapıldı', name, surname, password);
    navigation.navigate('Search'); // Ana ekrana yönlendir
  };

  const handleRegister = () => {
    // Kayıt işlemini burada gerçekleştir
    // Örneğin, API'ye istek göndererek kullanıcı oluşturabilirsiniz
    console.log('Kayıt olundu', name, surname, password);
    navigation.navigate('Search'); // Ana ekrana yönlendir
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
              <Button title="Kaydol" onPress={handleRegister} />
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen name="Search" component={SearchScreen} />
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
});
