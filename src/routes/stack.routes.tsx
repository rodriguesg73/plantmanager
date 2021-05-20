import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome/Welcome';
import { UserIdentification } from '../pages/UserIdentification/UserIdentification';
import { Confirmation } from '../pages/Confirmation/Confirmation';
import { PlantSelect } from '../pages/PlantSelect/PlantSelect';

import colors from '../styles/colors';
import fontSize from '../styles/fonts';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      },
    }}
  >
    <stackRoutes.Screen
      name="Welcome"
      component={Welcome}
    />

    <stackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />

    <stackRoutes.Screen
      name="Confirmation"
      component={Confirmation}
    />

    <stackRoutes.Screen
      name="PlantSelect"
      component={PlantSelect}
    />

  </stackRoutes.Navigator>
);

export default AppRoutes;