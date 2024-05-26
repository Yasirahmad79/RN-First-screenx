
import {View, StyleSheet, TextInput} from 'react-native';

const PostBody = ({bodyText, setBodyText}) => {
  return (
    <View>
      <TextInput
          style={styles.inputText}
          placeholder="Enter Post Body..."
          value={bodyText}
          onChangeText={text => setBodyText(text)}
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
export default PostBody;