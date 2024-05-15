import {useState} from 'react';
import {View, ScrollView, ActivityIndicator, StatusBar} from 'react-native';
import Title from '../components/Title';
import Name from '../components/Name';
import Email from '../components/Email';
import Password from '../components/Password';
import Buttons from '../components/Buttons';
import DisplayResult from '../components/DisplayResult';
import SkillsData from '../components/SkillsData';

const HomeScreen =() => {
    const [display, setDisplay] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [selectedRadio, setSelectedRadio] = useState(1);
  
    const clearInputs = () => {
      setDisplay(false);
      setName('');
      setEmail('');
      setPassword('');
    };
    const addData = () => {
      setDisplay(true);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 800);
    };
    return (
      <ScrollView>
        <StatusBar backgroundColor={'purple'} barStyle={'light-content'} />
        {show ? <ActivityIndicator size={60} color={'skyblue'} /> : null}
        <Title />
        <View>
          <Name name={name} setName={setName} />
          <Email email={email} setEmail={setEmail} />
          <Password password={password} setPassword={setPassword} />
        </View>
        <Buttons clearInputs={clearInputs} addData={addData} />
        <SkillsData
          selectedRadio={selectedRadio}
          setSelectedRadio={setSelectedRadio}
        />
        <DisplayResult
          display={display}
          name={name}
          email={email}
          password={password}
        />
      </ScrollView>
    );
  }
  export default HomeScreen;