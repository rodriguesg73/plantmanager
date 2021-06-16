import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList
} from 'react-native';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

import { Header } from '../../components/Header/Header';
import { PlantCardSecondary } from '../../components/PlantCardSecondary/PlantCardSecondary';
import { PlantsProps, loadPlant } from '../../libs/storage';

import wateringTipImg from '../../assets/waterdrop.png'

import styles from './styles';

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>();

  useEffect(() => {
    async function loadStoragedData() {
      const storagedPlants = await loadPlant();

      const nextTime = formatDistance(
        new Date(storagedPlants[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      )

      setNextWatered(
        `Não esqueça de regar a ${storagedPlants[0].name} às ${nextTime} horas.`);

      setMyPlants(storagedPlants);
      setLoading(false);
    }

    loadStoragedData();
  }, [])

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.spotlight}>
        <Image
          source={wateringTipImg}
          style={styles.spotlightImage}
        />
        <Text style={styles.spotlightText}>
          {nextWatered}
        </Text>
      </View>
      <View style={styles.myPlants}>
        <Text style={styles.myPlantsTitle}>
          Próximas regadas
        </Text >

        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary data={item} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        />
      </View>
    </View>
  )
}