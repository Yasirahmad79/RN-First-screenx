import {View, StyleSheet, Text, ImageBackground} from 'react-native';

const DisplayResult = ({display, name, email, password}) => {
    return(
        <View style={styles.todoTitle}>
        <ImageBackground
          style={styles.tinyLogo}
          source={{
            uri: 'https://grants.gettyimages.com/images/grants/GettyImages-1229275252.png',
          }}
          resizeMode="cover"
          blurRadius={0.8}>
          {display ? (
            <View>
              <Text style={{color: 'white', fontSize: 20, margin: 5}}>
                My name is : {name}
              </Text>
              <Text style={{color: 'white', fontSize: 20, margin: 5}}>
                My Email is : {email}
              </Text>
              <Text style={{color: 'white', fontSize: 20, margin: 5}}>
                My Password is : {password}
              </Text>
            </View>
          ) : (
            ''
          )}
        </ImageBackground>
      </View>
    )
};

const styles = StyleSheet.create({
  todoTitle: {
    textAlign: 'center',
    margin: 20,
    fontSize: 40,
    color: 'white',
    backgroundColor: 'grey',
    borderRadius: 10,
  },
  tinyLogo: {
    width: '100%',
    height: '100%',
  },
});

export default DisplayResult;
