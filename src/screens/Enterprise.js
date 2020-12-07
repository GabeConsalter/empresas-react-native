import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import styled from 'styled-components';

import api from '../services/api';
import config from '../config';
import { Button } from '../components';
import AuthContext from '../contexts/AuthContext';

function Enterprise({ route }) {
  const { enterpriseId } = route.params;

  const { user } = useContext(AuthContext);

  const [enterprise, setEnterprise] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getEnterprise(id) {
    try {
      const { data } = await api.get(`/enterprises/${id}`);
      setEnterprise(data.enterprise);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    getEnterprise(enterpriseId);
  });

  return (
    <Container>
      {enterprise ? (
        <>
          <Header source={{ uri: `${config.api.host}/${enterprise.photo}` }} />
          <Title>{enterprise.enterprise_name}</Title>
          <Content>
            <Text>{`${enterprise.city}, ${enterprise.country}.`}</Text>
            <Text>{`${enterprise.description}`}</Text>
          </Content>
          <Footer>
            <Balance>{`your balance is \n$${parseFloat(user.balance).toFixed(2)}`}</Balance>
            <SharePrice>{`$${parseFloat(enterprise.share_price).toFixed(2)}`}</SharePrice>
            <Button text="invest" onPress={() => Alert.alert('it was a pleasure', 'my app is done here, I appreciate your time using it, maybe I will work more on it in future')} />
          </Footer>
        </>
      ) : (
        <ActivityIndicator color="white" size="large" style={{ marginTop: 64 }} />
      )}
    </Container>
  );
}

const Container = styled.View`
  background-color: #1E2039;
  flex: 1;
`;

const Header = styled.Image`
  width: 100%;
  height: 256px;
  resize-mode: cover;
`;

const Title = styled.Text`
  color: white;
  position: relative;
  font-size: 25px;
  margin-left: 16px;
  font-weight: bold;
  position: absolute;
  top: 216px;
`;

const Content = styled.ScrollView`
  padding: 16px 16px;
`;

const Text = styled.Text`
  color: white;
  font-size: 16px;
  margin-bottom: 8px;
`;

const Footer = styled.View`
  width: 100%;
  padding: 16px;
`;

const Balance = styled.Text`
  color: grey;
  font-size: 14px;
  align-self: flex-end;
  text-align: right;
`;

const SharePrice = styled.Text`
  color: #985AF9;
  font-weight: bold;
  font-size: 25px;
  align-self: flex-end;
`;

export default Enterprise;
