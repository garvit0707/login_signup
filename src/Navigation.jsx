import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from './SigninScreen';
import Register from './Register';
import Home from './Home';
import Userpage from './Userpage';
import HomeScreen from './HomeScreen';
import { useColorScheme } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  // const theme = useColorScheme();
  const [users, setUsers] = useState([]);
  // console.log("the theme is ",theme)

  return (
    // <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
    <Stack.Navigator initialRouteName='homescreen'>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      
      <Stack.Screen
        name="SignIN"
        options={{ headerShown: false }}
      >
        {(props) => <SigninScreen {...props} users={users} />}
      </Stack.Screen>
      
      <Stack.Screen
        name="Register"
        options={{ headerShown: false }}
      >
        {(props) => <Register {...props} users={users} setUsers={setUsers} />}
      </Stack.Screen>

      <Stack.Screen name = "Userpage" options={{headerShown:false}}>
        {(props) => <Userpage {...props} users = {users}/>}
      </Stack.Screen>
      <Stack.Screen name='homescreen' component={HomeScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  // </NavigationContainer>
  );
};

export default Navigation;
