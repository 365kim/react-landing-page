import styled, { css } from 'styled-components';

export const StickyNav = css`
  position: fixed;
  top: 0;
  background: rgba(255, 255, 255, 0.1);
  /* for iPhone */
  -webkit-backdrop-filter: saturate(180%) blur(15px);
  -moz-backdrop-filter: saturate(180%) blur(15px);
  -o-backdrop-filter: saturate(180%) blur(15px);
  backdrop-filter: saturate(180%) blur(15px);
`;

interface NavProps {
  isSticky: boolean;
}

export const Nav = styled.nav<NavProps>`
  position: absolute;
  top: 45px;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 52px;
  padding: 0 1rem;
  border-bottom: 1px solid #ddd;

  ${(props) => (props.isSticky ? StickyNav : null)}
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
`;

export const NavLink = styled.a`
  font-size: 0.8rem;
`;

export const NavLinkProduct = styled(NavLink)`
  margin-right: auto;
  font-size: 1.4rem;
  font-weight: bold;
`;

export const NavLinkMenu = styled(NavLink)`
  margin-left: 2em;
`;
