import { View, Text, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';

const IoniconsHeaderButton = (props) => (

  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const HomeSceen = ({ navigation }) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({

      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item title="register" iconName="person-add" onPress={() => alert('ลงทะเบียน')} />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Ionicons name='home' size={30} color='#008b8b' />
      <Text>Home Screen</Text>
      <Button
        title='open drawer'
        onPress={() => navigation.openDrawer()}
      />
    </View>
  )
}

export default HomeSceen