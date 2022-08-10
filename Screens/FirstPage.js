import { View, Text } from 'react-native'
import React from 'react'

const FirstPage = ({navigation,route}) => {
  return (
    <View style={container}>
      <Text>Thai-Nichi Institute of Technology</Text>
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