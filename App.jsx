import {useState} from 'react';
import {View,ScrollView,} from 'react-native';
import Title from './components/Title';
import Name from './components/Name';
import Email from './components/Email';
import Password from './components/Password';
import Buttons from './components/Buttons';
import DisplayResult from './components/DisplayResult';

const App = () => {
  const [display, setDisplay] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clearInputs = () => {
    setDisplay(false);
    setName('');
    setEmail('');
    setPassword('');
  };
  const addData = () => {
    setDisplay(true);
  };
  return (
    <ScrollView>
      <Title />
      <View>
        <Name name={name} setName={setName} />
        <Email email={email} setEmail={setEmail} />
        <Password password={password} setPassword={setPassword} />
      </View>
      <Buttons clearInputs={clearInputs} addData={addData} />
      <DisplayResult display={display} name={name} email={email} password={password} />
    </ScrollView>
  );
};


export default App;
