import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import styles from '../components/styles'

const ThirdPage = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.container}>
        <Text style={styles.textTopStyle}>This is the ThirdPage</Text>
        <Button
        title='go to FirstPage'
        onPress={() => navigation.navigate('FirstPage')}
        />
        <Button
        title='go to SecondPage'
        onPress={() => navigation.navigate('SecondPage')}
        />
        </View>
        <Text style={styles.textBottomStyle}>Thai-Nichi Institute of Technology</Text>
    </View>
  )
}

export default ThirdPage
