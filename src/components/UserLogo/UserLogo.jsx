import { LogoContainer, UserImg, Line, UserContainer } from './UserLogo.styled';

export const UserLogo = ({ avatar, user }) => {
  console.log('avatar', avatar);
  return (
    <UserContainer>
      <LogoContainer>
        <UserImg src={avatar} alt={user} />
      </LogoContainer>
      <Line />
    </UserContainer>
  );
};
