import React from 'react';
import { ButtonFollow } from './ButtonFollow/ButtonFollow';
import { ButtonFollowing } from './ButtonFollowing/ButtonFollowing';
import { CardContainer } from './Card/Card.styled';
import vector from './vector.png';
console.log(vector);

export const App = () => {
  return (
    <div style={{ margin: '30px' }}>
      <CardContainer></CardContainer>
      <ButtonFollow />
      <ButtonFollowing />
      <img src={vector} alt="img" />
    </div>
  );
};
