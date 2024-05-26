import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen options={{tabBarBadge: 3}} name="Posts" component={AboutScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'grey',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 25,
          },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="LOGO" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

