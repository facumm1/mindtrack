import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HistoryScreen} from '../screens/HistoryScreen';
import {HistoryStackParamList} from '../types/stackTypes';

const Stack = createNativeStackNavigator<HistoryStackParamList>();

export const HistoryStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
    </Stack.Navigator>
  );
};
