import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Input(props) {
  const { label } = props;
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput {...props} />
    </Container>
  );
}

const Container = styled.View`
  margin: 4px 0;
`;

const TextInput = styled.TextInput`
  width: 100%;
  height: 50px;
  background-color: #00000055;
  border-radius: 9px;
  padding: 16px;
  font-size: 15px;
  color: white;
`;

const Label = styled.Text`
  color: #FFFFFF88;
  margin-left: 16px;
  margin-bottom: 8px;
`;

Input.propTypes = {
  label: PropTypes.string,
};

Input.defaultProps = {
  label: '',
};

export default Input;
