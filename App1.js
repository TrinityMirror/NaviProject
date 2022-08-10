import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeSceen from './Screens/HomeSceen';
import AboutScreen from './Screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerStyle:{backgroundColor:'#ffb6c1'},
        headerTintColor:'#fff',
        headerTintStyle:{fontWeight:'Bold',fontSize:40}
      }}
      >
        <Stack.Screen name='Home' component={HomeSceen}/>
        <Stack.Screen name='About' component={AboutScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    // <Stack.Navigator 
    // initialRouteName='FirstPage'
    // screenOptions={{
    //   headerStyle:{backgroundColor:'#ffb6c1'},
    //   headerTintColor:'#fff',
    //   headerTintStyle:{fontWeight:'Bold',fontSize:40}
    // }}
    // >
    //   <Stack.Screen name='FirstPage' component={HomeSceen}/>
    //   <Stack.Screen name='SecondPage' component={AboutScreen}/>
    // </Stack.Navigator>
    // </NavigationContainer>

  );
}

