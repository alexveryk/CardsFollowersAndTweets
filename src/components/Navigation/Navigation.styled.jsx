import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 18px;
  font-weight: 700;
  &.active {
    color: #067441;
  }
`;
