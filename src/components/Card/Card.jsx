import { UserLogo } from 'components/UserLogo/UserLogo';
import {
  CardContainer,
  FooterCard,
  HeaderCard,
  ImgBg,
  Line,
  Logo,
} from './Card.styled';
import { Tweets } from 'components/Tweets/Tweets';
import { Followers } from 'components/Followers/Followers';

export const Card = () => {
  return (
    <>
      <CardContainer>
        <HeaderCard />
        <UserLogo />
        <FooterCard />
        {/* <Logo src={logo} alt={'Logo'} />
      <ImgBg src={bgImg} alt={'backgroundImg'} />
      <Line />
      <UserLogo />
      <FooterCard>
        <Followers />
        <Tweets />
      </FooterCard> */}
      </CardContainer>
    </>
  );
};
