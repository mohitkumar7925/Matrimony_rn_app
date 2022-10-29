import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Login} from './src/screens/auth/Login';
import Colors from './src/values/Colors';
import fonts from './src/values/styles';
import {Signup} from './src/screens/auth/Signup';
import {Residence} from './src/screens/auth/Residence';
import {About} from './src/screens/auth/About';
import {Profile} from './src/screens/auth/Profile';
import {Home} from './src/screens/Dashboard/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Chat } from './src/screens/Chat/Chat';
import { MyProfile } from './src/screens/Profile/MyProfile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // navigationBarColor:Colors.primary,
          statusBarColor: Colors.primary,
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTitleStyle: {
            ...fonts.t_m,
            color: '#fff',
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Residence" component={Residence} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Profile" component={Profile} />

        <Stack.Screen name="Main" component={Tab_Home} options={{
        headerShown:false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab_Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        
        statusBarColor: Colors.primary,
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTitleStyle: {
          ...fonts.t_m,
          color: '#fff',
        },
        headerTintColor: '#fff',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Account" component={MyProfile} />
    </Tab.Navigator>
  );
};
