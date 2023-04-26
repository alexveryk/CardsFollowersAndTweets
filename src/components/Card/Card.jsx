import { UserLogo } from 'components/UserLogo/UserLogo';
import {
  CardContainer,
  FooterCard,
  HeaderCard,
  ImgBg,
  Logo,
} from './Card.styled';

// import logo from './images/vector.png';
// import bgImg from './images/picture.png';

import { Tweets } from 'components/Tweets/Tweets';
import { Followers } from 'components/Followers/Followers';
import { ButtonFollow } from 'components/Buttons/ButtonFollow';

// const logo = require('../../images/vector.png');
// const bgImg = require('../../images/picture.png');

export const Card = ({ user, followers, tweets, avatar }) => {
  return (
    <>
      <CardContainer>
        <HeaderCard>
          <Logo src={require('../assets/images/vector.png')} alt={'Logo'} />
          <ImgBg
            src={require('../assets/images/picture.png')}
            alt={'backgroundImg'}
          />
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
