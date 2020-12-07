import React, { useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { SignNavigator } from './Router';
import AuthContext from './contexts/AuthContext';

function App() {
  const [user, setUser] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const authContext = useMemo(() => ({
    user,
    signin: setUser,
    signout: setUser(null),
    signup: setUser,
  }));

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <SignNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
