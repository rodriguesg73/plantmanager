import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export function Button() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>
        Confirmar
      </Text>
    </TouchableOpacity>
  )
}