import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components';

import api from '../services/api';
import config from '../config';

function Enterprises() {
  const [loading, setLoading] = useState(true);
  const [enterprises, setEnterprises] = useState([]);

  async function getEnterprises() {
    try {
      const { data } = await api.get('/enterprises');
      setEnterprises(data.enterprises);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    getEnterprises();
  });

  return (
    <Container>
      {loading ? (
        <ActivityIndicator color="white" size="large" />
      ) : (
        <List>
          {enterprises.map((enterprise) => (
            <Item>
              <Photo source={{ uri: `${config.api.host}/${enterprise.photo}` }} />
              <Content>
                <Title>{enterprise.enterprise_name}</Title>
              </Content>
            </Item>
          ))}
        </List>
      )}

    </Container>
  );
}

const Container = styled.View`
  background-color: #1E2039;
  flex: 1;
  padding: 32px 16px;
`;

const List = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

const Item = styled.TouchableOpacity`
  width: 100%;
  height: 150px;
  background-color: white;
  margin-bottom: 16px;
  border-radius: 9px;
`;

const Photo = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
  position: absolute;
  top: 0;
  border-radius: 9px;
`;

const Content = styled.View`
  padding: 8px;
  background-color: #00000055;
  width: 100%;
  height: 100%;
  border-radius: 9px;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

export default Enterprises;
