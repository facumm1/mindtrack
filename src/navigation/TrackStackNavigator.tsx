import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TrackStackParamList} from '../types/stackTypes';
import {TrackScreen, DailyCheckScreen} from '../screens';

const Stack = createNativeStackNavigator<TrackStackParamList>();

export const TrackStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'fade'}}>
      <Stack.Screen name="TrackScreen" component={TrackScreen} />
      <Stack.Screen name="DailyCheckScreen" component={DailyCheckScreen} />
    </Stack.Navigator>
  );
};
