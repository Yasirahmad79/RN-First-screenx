import { useNavigation } from '@react-navigation/native';
import {View, Button, StyleSheet} from 'react-native';

const Buttons = ({clearInputs, addData}) => {
  const navigation = useNavigation();

  const goToAboutScreen = () => {
    navigation.navigate('About');
  };
  return (
    <View>
      <View style={styles.BtnStyle}>
        <Button title="Add Data" onPress={() => addData()} />
      </View>
      <View style={styles.BtnStyle}>
        <Button title="clear Data" onPress={() => clearInputs()} />
      </View>
      <View style={styles.BtnStyle}>
        <Button title="Go to About Screen" onPress={goToAboutScreen} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  BtnStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
export default Buttons;
