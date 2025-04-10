import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TrackScreen} from '../screens/TrackScreen';
import {TrackStackParamList} from '../types/stackTypes';

const Stack = createNativeStackNavigator<TrackStackParamList>();

export const TrackStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TrackScreen" component={TrackScreen} />
    </Stack.Navigator>
  );
};
