import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import styles from './styles';

interface EnviromentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnviromentButton({ title, active = false, ...rest }: EnviromentButtonProps) {
  return (
    <RectButton
      style={styles.button}
      {...rest}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </RectButton>
  )
}