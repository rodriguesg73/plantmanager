import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  button: {
    backgroundColor: colors.shape,
    height: 40,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 5
  },

  buttonActive: {
    backgroundColor: colors.green_light
  },

  text: {
    color: colors.heading,
    fontFamily: fonts.text
  },

  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark
  }
})