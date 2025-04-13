import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';

import {Control, Controller} from 'react-hook-form';
import Entypo from '@react-native-vector-icons/entypo';

import {StatusType} from '../../types/statusTypes';

interface Props {
  control: Control<StatusType>;
  title: string;
  fieldName: keyof StatusType;
}

const emojis = ['sad', 'neutral', 'happy', 'flirt'];

export const EmojiSelector = ({control, title, fieldName}: Props) => {
  const {colors} = useTheme();

  //TODO fix name type
  return (
    <Controller
      control={control}
      name={fieldName}
      rules={{required: true}}
      render={({field: {onChange, value}}) => (
        <View
          style={[styles.checkStatusBox, {backgroundColor: colors.primary}]}>
          <Text variant="titleMedium" style={{color: colors.onPrimary}}>
            {title}
          </Text>

          <View style={styles.emojiBox}>
            {emojis.map(name => (
              <TouchableOpacity
                onPress={() => onChange(name)}
                key={name}
                style={{paddingHorizontal: 10}}>
                <Entypo
                  name={'emoji-' + name}
                  size={35}
                  color={
                    value === name
                      ? colors.onPrimaryContainer
                      : colors.onPrimary
                  }
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  checkStatusBox: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 20,
    width: '100%',
  },
  emojiBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});
