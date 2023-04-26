import { UserLogo } from 'components/UserLogo/UserLogo';
import {
  CardContainer,
  FooterCard,
  HeaderCard,
  ImgBg,
  Logo,
} from './Card.styled';

import { Tweets } from 'components/Tweets/Tweets';
import { Followers } from 'components/Followers/Followers';
import { ButtonFollow } from 'components/Buttons/ButtonFollow';
import { useState } from 'react';

export const Card = ({ user, followers, tweets, avatar, id }) => {
  const [isFollowing, setIsFollowing] = useState('follow');

  const handleFollowChange = () => {
    setIsFollowing(!isFollowing);
  };

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

          <ButtonFollow
            onChange={handleFollowChange}
            isFollowing={isFollowing}
          />
        </FooterCard>
      </CardContainer>
    </>
  );
};
