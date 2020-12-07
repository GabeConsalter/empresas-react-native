import React, { useContext } from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';

import AuthContext from '../contexts/AuthContext';
import { Avatar, Button } from '../components';
import { UserSchema } from '../schemas';

function Profile() {
  const { user, signout } = useContext(AuthContext);

  function exit() {
    UserSchema.delete();
    signout();
  }

  return (
    <Container>
      <Avatar name={user.name} />
      <Name>{user.name}</Name>
      <Infos>{user.email}</Infos>
      <Infos>{`${user.city}, ${user.country}`}</Infos>
      <Balance>{`your balance is\n$${parseFloat(user.balance).toFixed(2)}`}</Balance>
      <Menu>
        <Button text="exit" onPress={() => exit()} />
      </Menu>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #1E2039;
  padding: 64px 16px;
`;

const Name = styled.Text`
  color: white;
  align-self: center;
  margin-top: 16px;
  font-size: 24px;
  font-weight: bold;
`;

const Infos = styled.Text`
  color: white;
  align-self: center;
  font-size: 18px;
`;

const Balance = styled.Text`
  font-size: 25px;
  color: #985AF9;
  font-weight: bold;
  text-align: center;
  align-self: center;
  margin-top: 32px;
`;

const Menu = styled.View`
  width: 100%;
  margin-top: 64px;
`;

const Item = styled.TouchableOpacity`

`;

export default Profile;
