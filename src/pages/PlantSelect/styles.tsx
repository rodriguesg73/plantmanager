import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    paddingHorizontal: 25
  },

  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15
  },

  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    lineHeight: 20,
    color: colors.heading,
  },

  environmentButtonContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
  },

  enviromentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 25,
    marginVertical: 32
  },

  plantButtonContainer: {
     flex: 1,
     paddingHorizontal: 32,
     justifyContent: 'center'
  },

  plantList: {

  }
});