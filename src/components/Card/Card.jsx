import { UserLogo } from 'components/UserLogo/UserLogo';
import {
  CardContainer,
  FooterCard,
  HeaderCard,
  ImgBg,
  Logo,
} from './Card.styled';

import logo from './images/vector.png';
import bgImg from './images/picture.png';

import { Tweets } from 'components/Tweets/Tweets';
import { Followers } from 'components/Followers/Followers';
import { ButtonFollow } from 'components/Buttons/ButtonFollow';

console.log('Image:', logo);

export const Card = ({ user, followers, tweets, avatar }) => {
  return (
    <>
      <CardContainer>
        <HeaderCard>
          <Logo src={logo} alt={'Logo'} />
          <ImgBg src={bgImg} alt={'backgroundImg'} />
        </HeaderCard>
        <UserLogo avatar={avatar} user={user} />
        <FooterCard>
          <Tweets tweets={tweets} />
          <Followers followers={followers} />
          <ButtonFollow />
        </FooterCard>
      </CardContainer>
    </>
  );
};
