import {NavigationContainer} from '@react-navigation/native';

import {BottomTabNavigator} from './navigation/BottomTabNavigator';

export const Mindtrack = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
