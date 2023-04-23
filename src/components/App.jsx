import React from 'react';
import { ButtonFollow } from './ButtonFollow/ButtonFollow';
import { ButtonFollowing } from './ButtonFollowing/ButtonFollowing';
import { CardContainer } from './Card/Card.styled';
import Vector from 'images/Vector.png';
console.log(Vector);

export const App = () => {
  return (
    <div style={{ margin: '30px' }}>
      <CardContainer></CardContainer>
      <ButtonFollow />
      <ButtonFollowing />
      <img src={Vector} alt="img" />
    </div>
  );
};
