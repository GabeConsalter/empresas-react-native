import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Avatar(props) {
  const { name } = props;

  function getInitials() {
    const words = name.toUpperCase().split(' ');

    if (words.length > 1) {
      return `${words[0][0]}${words[2] ? words[2][0] : words[1][0]}`;
    }

    return `${words[0][0]}${words[0][1]}`;
  }

  return (
    <Container>
      <Initials>{getInitials()}</Initials>
    </Container>
  );
}

const Container = styled.View`
  width: 128px;
  height: 128px;
  border-radius: 64px;
  background-color: #985AF9;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

const Initials = styled.Text`
  color: white;
  font-size: 60px;
`;

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Avatar;
