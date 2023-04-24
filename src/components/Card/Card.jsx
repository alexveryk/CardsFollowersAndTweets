import { UserLogo } from 'components/UserLogo/UserLogo';
import {
  CardContainer,
  FooterCard,
  HeaderCard,
  ImgBg,
  Logo,
} from './Card.styled';

import logo from '../../Images/vector.png';
import bgImg from '../../Images/picture.png';
import { Tweets } from 'components/Tweets/Tweets';
import { Followers } from 'components/Followers/Followers';
import { ButtonFollow } from 'components/Buttons/ButtonFollow';

export const Card = () => {
  return (
    <>
      <CardContainer>
        <HeaderCard>
          <Logo src={logo} alt={'Logo'} />
          <ImgBg src={bgImg} alt={'backgroundImg'} />
        </HeaderCard>
        <UserLogo />
        <FooterCard>
          <Tweets></Tweets>
          <Followers></Followers>
          <ButtonFollow />
        </FooterCard>
      </CardContainer>
    </>
  );
};
