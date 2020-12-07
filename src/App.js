import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { SignNavigator } from './Router';

function App() {
  return (
    <NavigationContainer>
      <SignNavigator />
    </NavigationContainer>
  );
}

export default App;
