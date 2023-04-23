import React from 'react';
import { ButtonFollow } from './ButtonFollow/ButtonFollow';
import { ButtonFollowing } from './ButtonFollowing/ButtonFollowing';
import { Card } from './Card/Card';
import { TextContainer } from './Text/Text';
// import vector from '../images/vector.png';

export const App = () => {
  return (
    <div style={{ margin: '30px' }}>
      <Card />
      <ButtonFollow />
      <ButtonFollowing />
      <TextContainer />
    </div>
  );
};
