import React from 'react';
import {StyleSheet} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HistoryStackNavigator,
  ProgressStackNavigator,
  TrackStackNavigator,
} from './';
import {useTheme} from 'react-native-paper';

type TabParamList = {
  TrackStackNavigator: undefined;
  HistoryStackNavigator: undefined;
  ProgressStackNavigator: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export const BottomTabNavigator = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: [
          styles.tabBar,
          {backgroundColor: colors.onPrimaryContainer},
        ],
      }}>
      <Tab.Screen
        name="TrackStackNavigator"
        component={TrackStackNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Ionicons
              name={'body'}
              color={focused ? colors.primary : colors.onPrimary}
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
              color={focused ? colors.primary : colors.onPrimary}
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
              color={focused ? colors.primary : colors.onPrimary}
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
    height: 50,
    paddingTop: 5,
  },
});
