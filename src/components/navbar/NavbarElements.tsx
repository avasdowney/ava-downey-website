import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #101010;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: calc(0.2rem / 2);
  z-index: 12;
  position: sticky;
  top: 0;
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1vw;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #ffffff;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -1vw;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 1vw;
  margin-left: 1vw;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 2px;
  background: #fff;
  padding: 0.5vw 0.5vw;
  color: #808080;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 1vw;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #202020b3;
    color: #959595ff;
  }
`;
