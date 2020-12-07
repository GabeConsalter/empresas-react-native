import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Signin, Home } from './screens';

function SignNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function MainNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export { SignNavigator, MainNavigator };
