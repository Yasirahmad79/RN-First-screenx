
import {View, StyleSheet, TextInput} from 'react-native';

const Title = ({title, setTitle}) => {
    
  return (
    <View>
      <TextInput
          style={styles.inputText}
          placeholder="Enter Post Title..."
          value={title}
          onChangeText={text => setTitle(text)}
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
export default Title;