import { View, Text, Button } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import {NavigationContainer, DefaultTheme } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import { createDrawerNavigator} from '@react-navigation/drawer';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255,45,85)'
  }
}

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
        title='Go to Home'
        />
    </View>
  )
}

const Tab = createBottomTabNavigator();

function MyTabs(){
  return(
    <Tab.Navigator
     screenOptions={({route})=>({
      tabBarIcon: ({focused,color,size})=>{
        let iconName;
        if(route.name==='Home'){
          iconName = focused
          ?'ios-information-circle'
          :'ios-information-circle-outline'
        } else if(route.name==='Setting'){
          iconName = focused
          ?'ios-list-box'
          :'ios-list'
        }
        //you can reture any component here
        return<Ionicons name={iconName} size={size} color={color}/>
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor : 'gray',

     })}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Setting" component={SettingScreen}/>

    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function MyDrawer(){
  return(
  <Drawer.Navigator useLegacyImplementation>
    <Drawer.Screen name='Home' component={MyTabs}/>
    <Drawer.Screen name='Setting' component={SettingScreen}/>
  </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
        <MyDrawer/>
    </NavigationContainer>
  )
}

export default App