import React from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeSceen from './Screens/HomeSceen';
import ProductScreen from './Screens/ProductScreen';
import { SafeAreaView } from 'react-native-web';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255,45,85)'
  }
}

function FeedScreen({ navigation }) {
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

    <SafeAreaView style={{ flex: 1 }}>
      <Image style={styles.sideMenuProfileIcon} source={require('./assets/react-logo.png')} />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  )
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent{...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#FFFF',
          width: 240,
        },
      }}
    >
      <Drawer.Screen name='Home' component={HomeSceen} />
      <Drawer.Screen name='Product' component={ProductScreen} />
    </Drawer.Navigator>
  )
}

const App = () => {
  
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create(
  {
    sideMenuProfileIcon:
    {
      resizeMode: 'center',
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      alignSelf: 'center',
    },
  })