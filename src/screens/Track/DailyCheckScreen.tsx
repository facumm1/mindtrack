import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Snackbar, Text, useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useForm} from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {EmojiSelector} from '../../components/molecules';
import {GoBackButton} from '../../components/atoms';
import {InvalidStatusModal} from '../../components/organisms';

import {useToggle} from '../../hooks/useToggle';
import {StatusType} from '../../types/statusTypes';
import {TrackStackParamList} from '../../types/stackTypes';

interface FieldData {
  title: string;
  fieldName: keyof StatusType;
}

const fieldData: Array<FieldData> = [
  {title: 'How do you feel physically?', fieldName: 'physical'},
  {title: 'How do you feel emotionally?', fieldName: 'emotional'},
  {title: 'How do you feel mentally?', fieldName: 'mental'},
];

export const DailyCheckScreen = () => {
  const {goBack} = useNavigation<NavigationProp<TrackStackParamList>>();
  const {colors} = useTheme();

  const {tg: showInvalidModal, stg: handleInvalidModal} = useToggle(false);
  const {tg: showSnackbar, stg: handleSnackbar} = useToggle(false);
  const {tg: showLoading, stg: handleLoading} = useToggle(false);

  const {control, handleSubmit} = useForm<StatusType>({
    defaultValues: {
      physical: '',
      emotional: '',
      mental: '',
    },
  });

  const onConfirm = async (statusData: StatusType) => {
    handleLoading(true);

    try {
      // Retrieve status history
      const history = await AsyncStorage.getItem('statusHistory');
      const historyParsed = history ? JSON.parse(history) : [];

      // Create new status with date
      const newStatus = {date: new Date(), ...statusData};

      // Add new status to history
      const historyUpdated = [...historyParsed, newStatus];

      await AsyncStorage.setItem(
        'statusHistory',
        JSON.stringify(historyUpdated),
      );

      handleLoading(false);
      goBack();
    } catch (error: unknown) {
      console.log('Error while adding new history to storage:', error);

      handleSnackbar(true);
    }
  };

  const onError = () => {
    handleInvalidModal(true);
  };

  return (
    <SafeAreaView
      style={[styles.safeAreaContainer, {backgroundColor: colors.onPrimary}]}>
      <View
        style={[
          styles.container,
          {backgroundColor: colors.onPrimaryContainer},
        ]}>
        <GoBackButton />

        <View style={styles.content}>
          <Text
            variant="displaySmall"
            style={{color: colors.onPrimary, textAlign: 'center'}}>
            Track your status
          </Text>

          {fieldData.map((data: FieldData) => (
            <EmojiSelector
              control={control}
              key={data.fieldName}
              title={data.title}
              fieldName={data.fieldName}
            />
          ))}
        </View>
      </View>

      <TouchableOpacity
        disabled={showLoading}
        activeOpacity={0.5}
        onPress={handleSubmit(onConfirm, onError)}
        style={[styles.btn, {backgroundColor: colors.onPrimaryContainer}]}>
        {showLoading ? (
          <ActivityIndicator
            animating={true}
            size={27.5}
            color={colors.primary}
          />
        ) : (
          <Text
            variant="titleLarge"
            style={[styles.btnText, {color: colors.onPrimary}]}>
            Done
          </Text>
        )}
      </TouchableOpacity>

      {/* Invalid Status Modal */}
      <InvalidStatusModal
        showModal={showInvalidModal}
        handleModal={handleInvalidModal}
      />

      {/* Error while creating/adding new status to storage */}
      <Snackbar
        visible={showSnackbar}
        onDismiss={() => handleSnackbar(false)}
        action={{
          label: 'Ok',
          onPress: () => {},
        }}>
        There was an error while adding your status to storage. Please try
        again.
      </Snackbar>
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
    marginTop: 25,
  },
  container: {
    width: '100%',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    paddingBottom: 25,
  },
  btn: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 20,
    padding: 10,
  },
  btnText: {textAlign: 'center'},
});
