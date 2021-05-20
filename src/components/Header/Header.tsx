import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image
} from 'react-native';

import userImg from '../../assets/guilherme.png'
import styles from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Guilherme</Text>
      </View>
      <Image
        source={userImg}
        style={styles.userImg}
        resizeMode='contain'
      />
    </View>
  )
}