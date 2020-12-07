import React, { useState, useContext } from 'react';
import { StatusBar, Linking } from 'react-native';
import styled from 'styled-components';

import { Logo, Input, Button } from '../components';
import api from '../services/api';
import { UserSchema } from '../schemas';
import AuthContext from '../contexts/AuthContext';

function Signin() {
  const [email, setEmail] = useState('testeapple@ioasys.com.br');
  const [password, setPassword] = useState('12341234');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { signin: ctxSignin } = useContext(AuthContext);

  async function signin() {
    setLoading(true);

    try {
      const { data: user } = await api.post('/users/auth/sign_in', { email, password });

      if (!user.success) {
        setError('Ocorreu algum problema, aguarde e tente novamente');
        setLoading(false);
        return;
      }

      const { investor } = user;

      const User = new UserSchema({
        ...investor,
        name: investor.investor_name,
        enterprises: investor.portfolio.enterprises,
        portfolioValue: investor.portfolio_value,
        firstAccess: investor.first_access,
        superAngel: investor.super_angel,
      });

      await User.save();
      ctxSignin(await UserSchema.get());

      setLoading(false);
    } catch (e) {
      console.log(e);
      setError('Usuário e/ou senha incorretos');
      setLoading(false);
    }
  }

  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <Logo />
      <Input
        value={email}
        label="email"
        autoCompleteType="email"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={(value) => {
          setError(null);
          setEmail(value);
        }}
      />
      <Input
        secureTextEntry
        value={password}
        label="password"
        onChangeText={(value) => {
          setError(null);
          setPassword(value);
        }}
      />
      <Button
        disabled={!email.length || !password.length}
        loading={loading}
        text="entrar"
        onPress={() => signin()}
      />
      {error ? <Error>{error}</Error> : null}
      <About onPress={() => Linking.openURL('https://github.com/gabeconsalter')}>made with ❤️ by @GabeConsalter</About>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #1E2039;
  padding: 32px 16px;
`;

const Error = styled.Text`
  color: red;
`;

const About = styled.Text`
  position: absolute;
  bottom: 16px;
  color: white;
  align-self: center;
`;

export default Signin;
