import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Button({ text }) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #985AF9;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
`;

const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
