import { Nav, NavLinks } from './styles';

export const GlobalNavBar = () => {
  return (
    <Nav className="global-nav">
      <NavLinks>
        <a href="#">Rooms</a>
        <a href="#">Ideas</a>
        <a href="#">Stores</a>
        <a href="#">Contact</a>
      </NavLinks>
    </Nav>
  );
};
