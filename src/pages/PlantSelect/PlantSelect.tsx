import React from 'react';
import {
  View,
  SafeAreaView,
  Text
} from 'react-native';

import { Header } from '../../components/Header/Header';
import { EnviromentButton } from '../../components/EnviromentButton/EnviromentButton';

import styles from './styles';

export function PlantSelect() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>
          Em qual ambiente
        </Text>
        <Text style={styles.subtitle}>
          você quer colocar sua planta?
        </Text>
      </View>

      <EnviromentButton title="Cozinha" />
    </View>
  )
}