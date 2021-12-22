import { Nav, NavLinks, NavLinkProduct, NavLinkMenu } from './styles';

interface Props {
  isSticky: boolean;
}

export const LocalNavBar = ({ isSticky }: Props) => {
  return (
    <Nav isSticky={isSticky}>
      <NavLinks>
        <NavLinkProduct href="#">AirMug Pro</NavLinkProduct>
        <NavLinkMenu href="#">개요</NavLinkMenu>
        <NavLinkMenu href="#">제품사양</NavLinkMenu>
        <NavLinkMenu href="#">구입하기</NavLinkMenu>
      </NavLinks>
    </Nav>
  );
};
