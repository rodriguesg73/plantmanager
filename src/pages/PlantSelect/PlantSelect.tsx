import React from 'react';
import {
  View,
  SafeAreaView,
  Text
} from 'react-native';

import { Header } from '../../components/Header/Header';

import styles from './styles';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function PlantSelect() {
  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Header />
      </View>
    </SafeAreaView>
  )
}