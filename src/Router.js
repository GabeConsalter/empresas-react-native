import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Signin } from './screens';

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

export { SignNavigator };
