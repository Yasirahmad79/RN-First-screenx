
import {View, StyleSheet, Text} from 'react-native';

const Title = () => {
  return (
    <View>
      <Text style={styles.todoTitle}>Simple Input Form</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    todoTitle: {
      textAlign: 'center',
      margin: 20,
      fontSize: 40,
      color: 'white',
      backgroundColor: 'grey',
      borderRadius: 10,
    }
  });
export default Title;