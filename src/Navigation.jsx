import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from './SigninScreen';
import Register from './Register';
import Home from './Home';
import Userpage from './Userpage';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [users, setUsers] = useState([]);

  return (
    <Stack.Navigator initialRouteName="Home">
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
    </Stack.Navigator>
  );
};

export default Navigation;
