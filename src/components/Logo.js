import React from 'react';
import styled from 'styled-components';

const image = require('../../assets/images/logo.png');

function Logo() {
  return <Image source={image} />;
}

const Image = styled.Image`
  width: 256px;
  height: 256px;
  resizeMode: contain;
  align-self: center;
`;

export default Logo;
