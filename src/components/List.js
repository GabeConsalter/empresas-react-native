import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import config from '../config';

function List(props) {
  const { items, noDataMessage } = props;

  return (
    <Container>
      {items.length ? items.map((item) => (
        <Item key={item.id}>
          <Photo source={{ uri: `${config.api.host}/${item.photo}` }} />
          <Content>
            <Title>{item.enterprise_name}</Title>
          </Content>
        </Item>
      )) : (
        <NoDataMessage>{noDataMessage}</NoDataMessage>
      )}
    </Container>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    photo: PropTypes.string.isRequired,
    enterprise_name: PropTypes.string.isRequired,
  })).isRequired,
  noDataMessage: PropTypes.string,
};

List.defaultProps = {
  noDataMessage: 'not found',
};

const Container = styled.ScrollView`
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

const NoDataMessage = styled.Text`
  color: red;
  align-self: center;
`;

export default List;
