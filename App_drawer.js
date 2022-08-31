import React from 'react'
import { View, Text, Button } from 'react-native'

import { createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({ navigation }){
  return(
    <View style={{flex: 1,alignItems: 'center',justifyContent:'center'}}>
        <Button
        onPress={()=> navigation.navigate('Notification')}
        title='Go to notofication'
        />
    </View>
  )
}

function Notification({ navigation }){
  return(
    <View style={{flex: 1,alignItems: 'center',justifyContent:'center'}}>
        <Button
        onPress={()=> navigation.goBack()}
        title='Go back home'
        />
    </View>
  )
}

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name='Home' component={HomeScreen}/>
        <Drawer.Screen name='Notification' component={Notification}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App