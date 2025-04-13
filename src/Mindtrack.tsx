import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';

import {BottomTabNavigator} from './navigation/BottomTabNavigator';

export const Mindtrack = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};
