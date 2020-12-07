import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ActivityIndicator } from 'react-native';

function Button(props) {
  const {
    text, loading, disabled, onPress,
  } = props;

  return (
    <Container disabled={disabled || loading} onPress={() => onPress()}>
      {!loading ? (
        <Text>{text}</Text>
      ) : (
        <ActivityIndicator color="white" />
      )}
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
  opacity: ${(props) => (props.disabled ? 0.3 : 1)}
`;

const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
  loading: false,
  disabled: false,
};

export default Button;
