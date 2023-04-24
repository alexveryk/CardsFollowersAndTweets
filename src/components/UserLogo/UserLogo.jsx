import { LogoContainer, UserImg, Line, UserContainer } from './UserLogo.styled';

export const UserLogo = () => {
  return (
    <UserContainer>
      <LogoContainer>
        <UserImg alt={'alt'} />
      </LogoContainer>
      <Line />
    </UserContainer>
  );
};
