import { useEffect, useState } from 'react';

import { Nav, NavLinks, NavLinkProduct, NavLinkMenu } from './styles';
import { GLOBAL_NAV_BAR_HEIGHT } from '../GlobalNavBar/styles';
import { throttle } from '../../utils';

const THROTTLE_TIME_MS = 30;

export const LocalNavBar = () => {
  const [scrollY, setScrollY] = useState(window.scrollY | window.pageYOffset);
  const isNavSticky = scrollY > GLOBAL_NAV_BAR_HEIGHT;

  useEffect(() => {
    const updateScrollY = () => setScrollY(window.scrollY | window.pageYOffset);
    const updateScrollYThrottled = throttle(updateScrollY, THROTTLE_TIME_MS);

    window.addEventListener('scroll', updateScrollYThrottled);
    return () => window.removeEventListener('scroll', updateScrollYThrottled);
  }, []);

  return (
    <Nav isSticky={isNavSticky}>
      <NavLinks>
        <NavLinkProduct href="#">AirMug Pro</NavLinkProduct>
        <NavLinkMenu href="#">개요</NavLinkMenu>
        <NavLinkMenu href="#">제품사양</NavLinkMenu>
        <NavLinkMenu href="#">구입하기</NavLinkMenu>
      </NavLinks>
    </Nav>
  );
};
