import React from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './styles';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { SafeAreaView } from 'react-native-safe-area-context';

export function PlantSelect() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Selecionar Planta</Text>
      </View>
    </SafeAreaView>
  )
}