import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import styles from '../components/styles'

const SecondPage = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.container}>
        <Text style={styles.textTopStyle}>This is the SecondPage</Text>
        <Button
        title='go to FirstPage'
        onPress={() => navigation.navigate('FirstPage')}
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
export default SecondPage
