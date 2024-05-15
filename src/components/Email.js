
import {View, StyleSheet, TextInput} from 'react-native';

const Email = ({email, setEmail}) => {
  return (
    <View>
      <TextInput
          style={styles.inputText}
          placeholder="Enter Your Email..."
          value={email}
          onChangeText={text => setEmail(text)}
        />
    </View>
  );
};

const styles = StyleSheet.create({
   
    inputText: {
      marginHorizontal: 10,
      paddingHorizontal: 15,
      borderWidth:1,
      fontSize: 20,
      borderRadius: 10,
      marginBottom: 6,
    },
  });
export default Email;