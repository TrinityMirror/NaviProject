import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import FirstPage from './Screens/FirstPage';
import SecondPage from './Screens/SecondPage';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='FirstPage'
        screenOptions={{
          headerStyle: { backgroundColor: 'pink' },
          headerTintColor: '#ffff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      >
        <Stack.Screen name='FirstPage' component={FirstPage} />
        <Stack.Screen name='SecondPage' component={SecondPage} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}