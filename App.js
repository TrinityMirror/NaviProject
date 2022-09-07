import { View, Text, Button } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

function HomeScreen({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>home!</Text>
      <Button
        onPress={()=> navigation.navigate('Setting')}
        title='Go to Setting'
        />
    </View>
  )
}

function SettingScreen({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>setting!</Text>
      <Button
        onPress={()=> navigation.navigate('Home')}
        title='Go to Homr'
        />
    </View>
  )
}

const Tab = createBottomTabNavigator();

function MyTabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Setting" component={SettingScreen}/>

    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  )
}

export default App