import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList
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
      <View style={styles.buttonContainer}>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item }) => (
            <EnviromentButton title="Cozinha" />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />

      </View>
    </View>
  )
}