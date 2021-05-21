import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  button: {
    backgroundColor: colors.shape,
    height: 40,
    width: 76,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12
  },

  buttonActive: {
    fontFamily: fonts.heading,
    color: colors.green
  },

  text: {
    color: colors.heading,
    fontFamily: fonts.text
  }
})