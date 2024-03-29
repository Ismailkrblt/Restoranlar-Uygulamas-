//Gerekli bileşenlerin importu
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './screens/SearchScreen';

const Stack = createNativeStackNavigator();
 //Temel navigasyon işlemleri için çatı
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerTitle:'RESTAL'}}>
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
 //Kullanıcı arayüzü öğelerinin oluşturur
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});