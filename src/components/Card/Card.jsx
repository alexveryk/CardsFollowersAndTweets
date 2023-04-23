import { UserLogo } from 'components/UserLogo/UserLogo';
import { CardContainer, ImgBg, Line, Logo } from './Card.styled';

export const Card = () => {
  const logo = require('../../images/vector.png');
  const bgImg = require('../../images/picture.png');

  return (
    <CardContainer>
      <Logo src={logo} alt={'Logo'} />
      <ImgBg src={bgImg} alt={'backgroundImg'} />
      <Line />
      <UserLogo />
    </CardContainer>
  );
};
