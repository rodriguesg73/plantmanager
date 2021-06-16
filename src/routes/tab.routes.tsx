import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PlantSelect } from '../pages/PlantSelect/PlantSelect';

import colors from '../styles/colors';
import { color } from 'react-native-reanimated';
import { MaterialIcons } from '@expo/vector-icons';
import { MyPlants } from '../pages/MyPlants/MyPlants';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: 'beside-icon',
        style: {
          paddingVertical: 10,
          paddingBottom: 10,
          height: 55
        }
      }}>
      <AppTab.Screen
        name="Nova Planta"
        component={PlantSelect}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ))
        }}
      />
      <AppTab.Screen
        name="Minhas Plantas"
        component={MyPlants}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ))
        }}
      />
    </AppTab.Navigator>
  )
}
export default AuthRoutes;