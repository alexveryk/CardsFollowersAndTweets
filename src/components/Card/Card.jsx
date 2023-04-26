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
  const [isFollowing, setIsFollowing] = useState(() => {
    const followStatus = localStorage.getItem(`${id}-follow`);
    return followStatus === 'following';
  });
  const [followersCount, setFollowersCount] = useState(() => {
    const count = localStorage.getItem(`${id}-count`);
    return count ? Number(count) : Number(followers);
  });

  const handleFollowChange = () => {
    setIsFollowing(!isFollowing);
    if (isFollowing) {
      localStorage.removeItem(`${id}-follow`);
      localStorage.removeItem(`${id}-count`);
      setFollowersCount(followersCount - 1);
    } else {
      localStorage.setItem(`${id}-follow`, 'following');

      setFollowersCount(followersCount + 1);
      localStorage.setItem(`${id}-count`, followersCount + 1);
    }
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
          <Followers followers={followersCount} />

          <ButtonFollow
            onChange={handleFollowChange}
            isFollowing={isFollowing}
          />
        </FooterCard>
      </CardContainer>
    </>
  );
};
