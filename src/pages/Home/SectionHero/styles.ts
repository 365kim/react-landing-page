import styled from 'styled-components';
import { Sticky } from '../../../components';

export const Heading = styled.h1`
  position: relative;
  top: -10vh;
  z-index: 5;
  font-size: 4rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 9vw;
  }
`;

interface Props {
  isVisible: boolean;
  translateY: number;
}

export const StickyMessage = styled(Sticky)<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 35vh;
  margin: 5px 0;
  height: 3em;
  font-size: 2.5rem;
  transform: translateY(${(props) => props.translateY ?? 0});

  @media (min-width: 1024px) {
    font-size: 4vw;
  }

  & > p {
    font-weight: bold;
    text-align: center;
    line-height: 1.2;
  }
`;
