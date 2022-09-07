import React from 'react'
import { View, Text, Button } from 'react-native'

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MyTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'rgb(255,45,85)'
  }
}

function FeedScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feed Screen</Text>
      <Button
        title='Open Drawer'
        onPress={() => navigation.openDrawer()}
        />
      <Button
        title='Toggle Drawer'
        onPress={() => navigation.toggleDrawer()}
        />
    </View>
  )
}

function NotiScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notification Screen</Text>
    </View>
  )
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView{...props}>
      <DrawerItemList{...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
    />
    </DrawerContentScrollView>
  )
}

const Drawer = createDrawerNavigator();

function MyDrawer(){
  return(
    <Drawer.Navigator 
    useLegacyImplementation
    drawerContent={(props)=> <CustomDrawerContent{...props}/>}
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#FFFF',
        width: 240,
        },
      }}
    >
      <Drawer.Screen name='Feed' component={FeedScreen} />
      <Drawer.Screen name='Article' component={NotiScreen} />
    </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer/>
    </NavigationContainer>
  );
}

export default App