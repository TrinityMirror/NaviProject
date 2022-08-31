import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import styles from '../components/styles'

const FirstPage = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.container}>
        <Text style={styles.textTopStyle}>This is the FirstPage</Text>
        <Button
        title='go to SecondPage'
        onPress={() => navigation.navigate('SecondPage')}
        />
        <Button
        title='go to ThirdPage'
        onPress={() => navigation.navigate('ThirdPage')}
        />
        </View>
        <Text style={styles.textBottomStyle}>Thai-Nichi Institute of Technology</Text>
    </View>
  )
}

export default FirstPage
