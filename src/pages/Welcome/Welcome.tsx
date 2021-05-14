import React from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import wateringImg from '../../assets/watering.png';
import styles from './styles';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function Welcome() {
  const navigation = useNavigation();

  function handleUserPage() {
    navigation.navigate('UserIdentification')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas de{'\n'}
          forma fácil
        </Text>

        <Image
          source={wateringImg}
          style={styles.img}
          resizeMode='contain'
        />

        <Text style={styles.subTitle}>
          Não esqueça mais de regar suas{'\n'}
          plantas. Nós cuidamos de lembrar você{'\n'}
          sempre que precisar.
        </Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Feather
            name="chevron-right"
            style={styles.buttonIcon}
            onPress={handleUserPage}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
