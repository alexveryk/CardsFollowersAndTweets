import { ButtonFollow } from './ButtonFollow/ButtonFollow';
import { ButtonFollowing } from './ButtonFollowing/ButtonFollowing';
import { CardContainer } from './Card/Card.styled';

export const App = () => {
  return (
    <div style={{ margin: '30px' }}>
      <CardContainer></CardContainer>
      <ButtonFollow />
      <ButtonFollowing />
      <img src="../../public/Vector.png"></img>
      <img src="../../assets//Vector.png"></img>
    </div>
  );
};
