import styled from 'styled-components';

export const GLOBAL_NAV_BAR_HEIGHT = 44;

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 44px;
  padding: 0 1rem;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
`;
