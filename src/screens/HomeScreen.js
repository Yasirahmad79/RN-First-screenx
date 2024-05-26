import { useState} from 'react';
import {View, ScrollView, StatusBar} from 'react-native';
import MainTitle from '../components/MainTitle';
import Title from '../components/Title';
import PostBody from '../components/PostBody';
import Buttons from '../components/Buttons';
import SkillsData from '../components/SkillsData';
import { useNavigation } from '@react-navigation/native';

const HomeScreen =() => {
    const [title, setTitle] = useState('');
    const [bodyText, setBodyText] = useState('');
    const [selectedRadio, setSelectedRadio] = useState(1);
    const navigation = useNavigation();
  
    const clearInputs = () => {
      setTitle('');
      setBodyText('');
    };
    const addData = async () => {
      const url = 'http://10.0.2.2:3000/users';
      try {
        let result = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ title, body: bodyText })
        });
        result = await result.json();
        if (result) {
          clearInputs();
          navigation.navigate('Posts');
          console.warn("Data added");
        }
      } catch (error) {
        console.error("Error adding data:", error);
      }
    };
    
    
    return (
      <ScrollView>
        <StatusBar backgroundColor={'purple'} barStyle={'light-content'} />
        <MainTitle />
        <View>
          <Title title={title} setTitle={setTitle} />
          <PostBody bodyText={bodyText} setBodyText={setBodyText} />
        </View>
        <Buttons clearInputs={clearInputs} addData={addData} />
        <SkillsData
          selectedRadio={selectedRadio}
          setSelectedRadio={setSelectedRadio}
        />
      </ScrollView>
    );
  }
  export default HomeScreen;