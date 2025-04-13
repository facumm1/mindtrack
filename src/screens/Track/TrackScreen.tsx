import {Text, useTheme} from 'react-native-paper';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {useNavigation, NavigationProp} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from '@react-native-vector-icons/ionicons';

import {TrackStackParamList} from '../../types/stackTypes';

export const TrackScreen = () => {
  const {navigate} = useNavigation<NavigationProp<TrackStackParamList>>();
  const {colors} = useTheme();

  const formattedTodayDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  });

  return (
    <SafeAreaView
      style={[styles.safeAreaContainer, {backgroundColor: colors.onPrimary}]}>
      <View
        style={{
          width: '100%',
          backgroundColor: colors.onPrimaryContainer,
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
        }}>
        <View style={styles.content}>
          <Text
            variant="titleMedium"
            style={{color: colors.onPrimary, marginTop: 25}}>
            {formattedTodayDate}
          </Text>
          <Text variant="displaySmall" style={{color: colors.onPrimary}}>
            Hello!
          </Text>
          <Text variant="displaySmall" style={{color: colors.onPrimary}}>
            How are you feeling today?
          </Text>

          <TouchableOpacity
            onPress={() => navigate('DailyCheckScreen')}
            activeOpacity={0.5}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: colors.primary,
              alignSelf: 'center',
              paddingVertical: 20,
              paddingHorizontal: 20,
              borderRadius: 50,
              marginVertical: 20,
              width: '100%',
            }}>
            <Text variant="titleMedium" style={{color: colors.onPrimary}}>
              Track your status
            </Text>

            <Ionicons
              name="chevron-forward"
              size={24}
              color={colors.onPrimary}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <Text
          variant="headlineMedium"
          style={{color: colors.primary, marginTop: 25}}>
          Your latest track
        </Text>

        <Text variant="titleMedium" style={{color: colors.secondary}}>
          You haven't tracked your mood today yet.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  content: {
    width: '90%',
    alignSelf: 'center',
  },
});
