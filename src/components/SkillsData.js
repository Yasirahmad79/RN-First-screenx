import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const Languages = [
  {
    id: 1,
    name: 'JavaScript',
  },
  {
    id: 2,
    name: 'Python',
  },
  {
    id: 3,
    name: 'PHP',
  },
  {
    id: 4,
    name: 'Java',
  }
];

const SkillsData = ({selectedRadio, setSelectedRadio}) => {
  return (
    <View style={styles.main}>
        <Text>Radio Buttons</Text>
      {Languages.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => setSelectedRadio(item.id)}
            key={index}>
            <View style={styles.wrapper}>
              <View style={styles.radio}>
                {selectedRadio === item.id ? (
                  <View style={styles.radioBg}></View>
                ) : null}
              </View>
              <Text style={styles.radioText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
    main: {
      flex: 1,
      alignItems: 'start',
      margin: 15,
    },
    wrapper: {flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10},
    radio: {
      width: 40,
      height: 40,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 20,
    },
    radioBg: {
      width: 30,
      height: 30,
      margin: 3,
      borderRadius: 15,
      backgroundColor: 'green',
    },
    radioText: {fontSize: 20, color: 'green'},
  });
export default SkillsData;
