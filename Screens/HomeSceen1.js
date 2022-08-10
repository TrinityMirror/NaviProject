import { View, Text, Button } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import React from 'react'

const HomeSceen = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Ionicons name='home' size={30} color='#008b8b'/>
    <Text>Home Screen</Text>
    <Button 
    title='เกี่ยวกับเรา'
    onPress={()=>navigation.navigate('About',{
        email:'reactnative@tni.ac.th'
    })}
    />
   </View>
  )
}

export default HomeSceen