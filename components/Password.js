
import {View, StyleSheet, TextInput} from 'react-native';

const Password = ({password, setPassword}) => {
  return (
    <View>
      <TextInput
          style={styles.inputText}
          placeholder="Create your Password..."
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
    </View>
  );
};

const styles = StyleSheet.create({
   
    inputText: {
      marginHorizontal: 10,
      paddingHorizontal: 15,
      fontSize: 20,
      borderRadius: 10,
      marginBottom: 6,
      borderWidth:1
    },
  });
export default Password;