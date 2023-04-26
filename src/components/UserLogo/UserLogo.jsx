import { LogoContainer, UserImg, Line, UserContainer } from './UserLogo.styled';

export const UserLogo = ({ avatar, user }) => {
  return (
    <UserContainer>
      <LogoContainer>
        <UserImg src={avatar} alt={user} />
      </LogoContainer>
      <Line />
    </UserContainer>
  );
};
