import 'react-native-gesture-handler';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import SingIn from './src/SingIn/SingIn.js'
import Singup from './src/Singup/Singup.js'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen options={{headerShown:false}} name='SingIn' component={SingIn}/>

        <Stack.Screen name='Singup' component={Singup}/>
        
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
});
