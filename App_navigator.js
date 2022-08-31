import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
// import FirstPage from './Screens/FirstPage';
// import SecondPage from './Screens/SecondPage';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: { backgroundColor: 'pink' },
          headerTintColor: '#ffff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      >
        <Stack.Screen name='FirstPage' component={FirstPage} />
        <Stack.Screen name='SecondPage' component={SecondPage} />
        <Stack.Screen name='ThirdPage' component={ThirdPage} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}