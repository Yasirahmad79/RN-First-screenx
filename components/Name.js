
import {View, StyleSheet, TextInput} from 'react-native';

const Name = ({name, setName}) => {
    
  return (
    <View>
      <TextInput
          style={styles.inputText}
          placeholder="Enter Your name..."
          value={name}
          onChangeText={text => setName(text)}
        />
    </View>
  );
};

const styles = StyleSheet.create({
   
    inputText: {
      marginHorizontal: 10,
      paddingHorizontal: 15,
      borderColor: 'blue',
      fontSize: 20,
      borderRadius: 10,
      marginBottom: 6,
    },
  });
export default Name;