import React, { useMemo, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { MainNavigator, SignNavigator } from './Router';
import AuthContext from './contexts/AuthContext';
import { UserSchema } from './schemas';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const authContext = useMemo(() => ({
    user,
    signin: setUser,
    signout: () => setUser(null),
    signup: setUser,
  }));

  async function getUser() {
    setUser(await UserSchema.get());
    setIsLoading(false);
  }

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer>
        {user ? <MainNavigator /> : <SignNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
