import React from 'react';
import {
  SafeAreaView,
  Text,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Button } from '../../components/Button/Button';

import styles from './styles';

export function Confirmation() {
  const navigation = useNavigation();

  function handleHomePage() {
    navigation.navigate('PlantSelect')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
          😄
        </Text>
        <Text style={styles.header}>
          Prontinho
        </Text>
        <Text style={styles.title}>
          Agora vamos começar a cuidar das suas{'\n'}
          plantinhas com muito cuidado
        </Text>
        <View style={styles.footer}>
          <Button
            title="Começar"
            onPress={handleHomePage}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}