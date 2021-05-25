import AppLoading from 'expo-app-loading';
import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList
} from 'react-native';

import { EnviromentButton } from '../../components/EnviromentButton/EnviromentButton';
import { Header } from '../../components/Header/Header';
import api from '../../services/api';

import styles from './styles';

interface EnviromentData {
  key: string;
  title: string;
}

export function PlantSelect() {
  const [environments, setEnvironments] = useState<EnviromentData[]>([]);

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api.get('plants_enviroments');

      if (!data)
        return <AppLoading />

      setEnvironments(data)
    }

    fetchEnviroment();
  }, [])
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
          data={environments}
          renderItem={({ item }) => (
            <EnviromentButton title={item.title} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />

      </View>
    </View>
  )
}