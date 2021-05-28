import React from 'react';
import { View } from 'react-native';
import Lottie from 'lottie-react-native';

import loadAnimation from '../../assets/load.json';

import styles from './styles';

export function Loading() {
  return (
    <View style={styles.loadContainer}>
      <Lottie 
        source={loadAnimation}
        autoPlay
        loop
        style={styles.loadAnimation}
      />
    </View>
  )
}