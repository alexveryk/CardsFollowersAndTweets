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
import { useState, useEffect } from 'react';

export const Card = ({ user, followers, tweets, avatar, id }) => {
  const [isFollowing, setIsFollowing] = useState(() => {
    const followData = JSON.parse(localStorage.getItem('followData'));
    return followData && followData[id] && followData[id].isFollowing;
  });
  const [followersCount, setFollowersCount] = useState(() => {
    const followData = JSON.parse(localStorage.getItem('followData'));
    return followData && followData[id] && followData[id].count
      ? Number(followData[id].count)
      : Number(followers);
  });

  useEffect(() => {
    const followData = JSON.parse(localStorage.getItem('followData')) || {};
    followData[id] = { isFollowing, count: followersCount };
    localStorage.setItem('followData', JSON.stringify(followData));
  }, [id, isFollowing, followersCount]);

  const handleFollowChange = () => {
    setIsFollowing(!isFollowing);
    setFollowersCount(prevCount => {
      const newCount = isFollowing ? prevCount - 1 : prevCount + 1;
      return newCount;
    });
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
