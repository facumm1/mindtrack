import {TouchableOpacity} from 'react-native';
import {Card, Modal, Text, useTheme} from 'react-native-paper';

interface Props {
  showModal: boolean;
  handleModal: (toggleModal: boolean) => void;
}

export const InvalidStatusModal = ({showModal, handleModal}: Props) => {
  const {colors} = useTheme();

  return (
    <Modal visible={showModal} onDismiss={() => handleModal(false)}>
      <Card style={{width: '90%', alignSelf: 'center', padding: 10}}>
        <Card.Title title="Status not completed" titleVariant="titleLarge" />

        <Card.Content>
          <Text variant="titleMedium">
            Please complete your all your statuses before you finish
          </Text>
        </Card.Content>

        <Card.Actions>
          <TouchableOpacity
            onPress={() => handleModal(false)}
            style={{
              backgroundColor: colors.primary,
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 25,
            }}>
            <Text variant="titleSmall" style={{color: colors.onPrimary}}>
              Close
            </Text>
          </TouchableOpacity>
        </Card.Actions>
      </Card>
    </Modal>
  );
};
