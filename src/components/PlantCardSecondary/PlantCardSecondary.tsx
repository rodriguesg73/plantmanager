import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';


import styles from './styles';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  }
}

export function PlantCardSecondary({ data, ...rest }: PlantProps) {
  return (
    <RectButton
      style={styles.plantCardButton}
      {...rest}
    >
      <SvgFromUri
        uri={data.photo}
        width={50}
        height={50}
      />
      <Text style={styles.plantCardTitle}>
        {data.name}
      </Text>
      <View style={styles.details}>
        <Text style={styles.timeLabel}>
          Regar às
        </Text><Text style={styles.time}>
          {data.hour}
        </Text>
      </View>
    </RectButton>
  )
}