import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import config from '../config';

function List(props) {
  const { items, noDataMessage, onSelectItem } = props;

  return (
    <Container>
      {items.length ? items.map((item) => (
        <Item key={item.id} onPress={() => onSelectItem(item)}>
          <Photo source={{ uri: `${config.api.host}/${item.photo}` }} />
          <Content>
            <Title>{item.enterprise_name}</Title>
            <Subtitle>{`${item.city}, ${item.country}`}</Subtitle>
            <More>{`${item.enterprise_type.enterprise_type_name}\n$${parseFloat(item.share_price).toFixed(2)}`}</More>
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
  onSelectItem: PropTypes.func.isRequired,
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

const Subtitle = styled.Text`
  color: white;
  font-size: 15px;
`;

const More = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
  position: absolute;
  bottom: 16px;
  right: 16px;
  text-align: right;
`;

const NoDataMessage = styled.Text`
  color: red;
  align-self: center;
`;

export default List;
