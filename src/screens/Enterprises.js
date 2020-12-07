import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import api from '../services/api';
import { Input, List } from '../components';

function Enterprises({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [enterprises, setEnterprises] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  async function getEnterprises() {
    try {
      const { data } = await api.get('/enterprises');
      setEnterprises(data.enterprises);

      data.enterprises.forEach((enterprise) => {
        if (!types.find((type) => type.id === enterprise.enterprise_type.id)) {
          types.push(enterprise.enterprise_type);
        }
      });

      setTypes(types);

      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  async function getEnterprisesByType(type) {
    setLoading(true);

    try {
      const { data } = await api.get(`/enterprises?enterprise_types=${type.id}`);
      setEnterprises(data.enterprises);

      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  async function getEnterprisesByName(query) {
    setLoading(true);

    try {
      const { data } = await api.get(`/enterprises?name=${query}`);
      setEnterprises(data.enterprises);

      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!enterprises.length) {
      getEnterprises();
    }
  });

  return (
    <Container>
      <Input
        clear
        placeholder="search by enterprise name"
        onClearPressed={() => {}}
        onChangeText={(value) => {
          if (!value.length) {
            getEnterprises();
          }

          if (value.length > 3) {
            getEnterprisesByName(value);
          }
        }}
      />
      {types.length ? (
        <Types horizontal>
          {types.map((type) => (
            <TypeContainer
              key={type.id}
              selected={selectedType && selectedType.id === type.id}
              onPress={() => {
                setSelectedType(type);
                getEnterprisesByType(type);
              }}
            >
              <Type>{type.enterprise_type_name}</Type>
            </TypeContainer>
          ))}
        </Types>
      ) : null}
      {loading ? (
        <ActivityIndicator color="white" size="large" />
      ) : (
        <List
          items={enterprises}
          noDataMessage="no enterprise found"
          onSelectItem={(item) => navigation.navigate('Enterprise', { enterpriseId: item.id })}
        />
      )}
    </Container>
  );
}

Enterprises.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const Container = styled.View`
  background-color: #1E2039;
  flex: 1;
  padding: 0 16px;
`;

const Types = styled.ScrollView`
  width: 100%;
  max-height: 40px;
  margin-bottom: 16px;
`;

const TypeContainer = styled.TouchableOpacity`
  background-color: ${(props) => (props.selected ? '#985AF9' : '#00000055')};
  margin-right: 6px;
  border-radius: 7px;
  padding: 16px 10px;
  align-items: center;
  justify-content: center;
`;

const Type = styled.Text`
  color: white;
`;

export default Enterprises;
