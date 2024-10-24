// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InputScreen from './src/screens/InputScreen';
import HomeScreen from './src/screens/HomeScreen';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="InputScreen" component={InputScreen} />
 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
