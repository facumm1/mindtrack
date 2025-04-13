import {StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import Ionicons from '@react-native-vector-icons/ionicons';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {TrackStackParamList} from '../../types/stackTypes';

export const GoBackButton = () => {
  const {goBack} = useNavigation<NavigationProp<TrackStackParamList>>();
  const {colors} = useTheme();

  return (
    <TouchableOpacity style={styles.btn} onPress={() => goBack()}>
      <Ionicons name="chevron-back" size={35} color={colors.onPrimary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    top: 30,
    left: 10,
    zIndex: 100,
  },
});
