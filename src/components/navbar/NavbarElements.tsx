import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #101010;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  position: sticky;
  top: 0;
  z-index: 12;

  @media screen and (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

export const NavLink = styled(Link)`
  color: #808080;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  font-size: 0.95rem;
  white-space: nowrap;

  @media screen and (max-width: 480px) {
    padding: 0 0.3rem;
    font-size: 0.82rem;
  }

  &.active {
    color: #ffffff;
  }

  &:hover {
    color: #ffffff;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  /* Removed negative margin that caused collision */
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media screen and (max-width: 480px) {
    gap: 0.25rem;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #fff;
  padding: 6px 12px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #101010;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 480px) {
    padding: 5px 8px;
    font-size: 0.75rem;
  }

  &:hover {
    background: #202020b3;
    color: #ffffff;
  }
`;