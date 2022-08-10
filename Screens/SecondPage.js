import {StyleSheet, View, Text } from 'react-native'
import React from 'react'

const SecondPage = ({navigation,route}) => {
  return (

    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text  Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
    <Text style={styles.textStyle}>Value pass from First page : {route.params?.postText}</Text>
    </View>

  )
}

export default SecondPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
});