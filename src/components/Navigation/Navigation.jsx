import { StyledLink } from './Navigation.styled';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      {/* <StyledLink to="/">Home !</StyledLink>
      <StyledLink to="/tweets">Tweets!</StyledLink> */}
      <NavLink to="/">Home !</NavLink>
      <NavLink to="/tweets">Tweets!</NavLink>
    </nav>
  );
};
