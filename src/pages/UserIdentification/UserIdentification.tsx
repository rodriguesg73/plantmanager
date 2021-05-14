import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Button } from '../../components/Button/Button'
import colors from '../../styles/colors';

import styles from './styles';

export function UserIdentification() {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  function handleConfirmationPage() {
    navigation.navigate('Confirmation')
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.viewContent}>
            <View style={styles.viewForm}>
              <View style={styles.viewHeader}>
                <Text style={styles.emoji}>
                  {isFilled ? '😄' : '😀'}
                </Text>
                <Text style={styles.title}>
                  Como podemos{'\n'}
                  chamar você?
                </Text>
              </View>
              <TextInput
                style={[
                  styles.textInput,
                  (isFocused || isFilled) && { borderColor: colors.green }
                ]}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />
              <View style={styles.footer}>
                <Button
                  title="Confirmar"
                  onPress={handleConfirmationPage}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}