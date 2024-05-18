import {Text, View, ActivityIndicator, ScrollView} from 'react-native';
import {useEffect, useState} from 'react';

const AboutScreen = () => {
  const [data, setData] = useState([]);

    async function getApiData() {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <ScrollView>
    <View style={{flex: 1, alignItems: 'center', flexWrap: 'wrap'}}>
      <Text style={{fontSize: 26, fontWeight: '900'}}>
        this is AboutScreen just for checking API calling & stack Navigation!
      </Text>
      {data.length
        ? data.map(item => 
            <View style={{borderWidth: 2, borderColor: 'purple', margin: 10 , padding: 10}} key={item.id}>
              <Text style={{fontSize: 15, color: 'red'}}>{item.id}.</Text>
              <Text style={{fontSize: 25, fontStyle: 'italic',fontWeight: '800'}}>{item.title}.</Text>
              <Text style={{fontSize: 20}}>{item.body}.</Text>
            </View>
          )
        : <ActivityIndicator size={60} color={'skyblue'} />}
    </View>
    </ScrollView>
  );
};

export default AboutScreen;
