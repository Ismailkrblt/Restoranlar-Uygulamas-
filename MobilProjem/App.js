import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './screens/SearchScreen';
import ResultsShowScreen from './screens/ResultsShowScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: (props) => (
            <Text style={styles.headerTitle3D}>NeGit</Text> 
          ),
        }}
      >
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0392B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle3D: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B03000',
    paddingHorizontal: 16,
    transform: [
      { rotateX: '10deg' },
      { perspective: 200 },
    ],
    textShadow: [
      {
        color: '#000',
        offset: { x: 1, y: 1 },
        radius: 2,
      },
      {
        color: '#000',
        offset: { x: -1, y: -1 },
        radius: 2,
      },
    ],
  },
});
