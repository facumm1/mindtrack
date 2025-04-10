import React from 'react';
import {StyleSheet} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HistoryStackNavigator,
  ProgressStackNavigator,
  TrackStackNavigator,
} from './';
import colors from '../theme/colors';

type TabParamList = {
  TrackStackNavigator: undefined;
  HistoryStackNavigator: undefined;
  ProgressStackNavigator: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="TrackStackNavigator"
        component={TrackStackNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Ionicons
              name={'body'}
              color={focused ? colors.selectedRed : colors.unselectedGray}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HistoryStackNavigator"
        component={HistoryStackNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Ionicons
              name={'reader'}
              color={focused ? colors.selectedRed : colors.unselectedGray}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProgressStackNavigator"
        component={ProgressStackNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Ionicons
              name={'bar-chart'}
              color={focused ? colors.selectedRed : colors.unselectedGray}
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.primary,
    height: 50,
    paddingTop: 5,
  },
});
