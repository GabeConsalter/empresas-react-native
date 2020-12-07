/* eslint-disable react/prop-types */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Signin, Enterprises, Profile, Enterprise } from './screens';

function SignNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function MainNavigator() {
  const Tab = createBottomTabNavigator();

  function EnterprisesStack() {
    const Stack = createStackNavigator();

    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Enterprises"
          component={Enterprises}
          options={{
            headerStyle: {
              backgroundColor: '#1E2039',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Enterprise"
          component={Enterprise}
          options={{
            headerTransparent: true,
            headerTintColor: 'white',
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    );
  }

  function ProfileStack() {
    const Stack = createStackNavigator();

    return (
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#1E2039',
          borderTopWidth: 0,
          elevation: 0,
        },
        activeTintColor: '#985AF9',
        inactiveTintColor: '#985AF955',
      }}
    >
      <Tab.Screen
        name="EnterprisesStack"
        component={EnterprisesStack}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="briefcase" size={size} color={color} />,
          title: '',
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="user" size={size} color={color} />,
          title: '',
        }}
      />
    </Tab.Navigator>
  );
}

export { SignNavigator, MainNavigator };
