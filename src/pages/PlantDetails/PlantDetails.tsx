import {
  Alert,
  Text,
  View,
  ScrollView,
  Image,
  Platform,
  TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';
import { SvgFromUri } from 'react-native-svg';
import { useNavigation, useRoute } from '@react-navigation/core';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';

import { Button } from '../../components/Button/Button';
import { PlantsProps, savePlant } from '../../libs/storage';
import wateringTipImg from '../../assets/waterdrop.png'

import styles from './styles';
import { format, isBefore } from 'date-fns';

interface Params {
  plant: PlantsProps
}

export function PlantDetails() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS == 'ios');

  const route = useRoute();
  const { plant } = route.params as Params;
  const navigation = useNavigation();

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert('Escolha uma horário válido! ⏰')
    }

    if (dateTime)
      setSelectedDateTime(dateTime);
  }

  async function handleSavePlant() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime
      });

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.',
        buttonTitle: 'Muito obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlants'
      });
    } catch (error) {
      Alert.alert('Não foi possível salvar. 😥')
    }
  }

  function handleOpenDateTimePickerAndroid() {
    setShowDatePicker(oldState => !oldState);
  }
  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri
          uri={plant.photo}
          height={150}
          width={150}
        />

        <Text style={styles.plantName}>
          {plant.name}
        </Text>
        <Text style={styles.plantDetails}>
          {plant.about}
        </Text>
      </View>
      <View style={styles.controller}>
        <View style={styles.plantTip}>
          <Image
            source={wateringTipImg}
            style={styles.wateringTipImg}
          />
          <Text style={styles.wateringTipText}>
            {plant.water_tips}
          </Text>
        </View>

        <Text style={styles.alertText}>
          Escolha o melhor horário para ser lembrado:
        </Text>

        {showDatePicker && (
          <DateTimePicker
            value={selectedDateTime}
            mode="time"
            display="spinner"
            onChange={handleChangeTime}
          />
        )}

        {
          Platform.OS === 'android' && (
            <TouchableOpacity
              style={styles.dateTimePickerButton}
              onPress={handleOpenDateTimePickerAndroid}
            >
              <Text style={styles.dateTimePickerText}>
                {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
              </Text>
            </TouchableOpacity>
          )
        }

        <Button
          title="Cadastrar planta"
          onPress={handleSavePlant}
        />
      </View>
    </View>
  )
}