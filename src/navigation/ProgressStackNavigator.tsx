import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ProgressScreen} from '../screens/ProgressScreen';
import {ProgressStackParamList} from '../types/stackTypes';

const Stack = createNativeStackNavigator<ProgressStackParamList>();

export const ProgressStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProgressScreen" component={ProgressScreen} />
    </Stack.Navigator>
  );
};
