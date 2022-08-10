import {StyleSheet, View, Text, Button,TextInput } from 'react-native'
import React from 'react'

const FirstPage = ({navigation,route}) => {

const [postText, setPostText] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
      <Text style={styles.textStyle}>Please insert your name to pass it to second screen</Text>
      <TextInput
      placeholder='your name'
      style={{ height: 50, padding: 10,marginBottom:10, backgroundColor: 'white' }}
      onChangeText={setPostText}
      value={postText}
      />
      <Button
      title='go next'
      onPress={() => navigation.navigate('SecondPage',{postText})}
      />
    </View>
  )
}

export default FirstPage

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