import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

const visibleStyle = css`
  visibility: visible;
  will-change: transform, opacity;
`;

interface Props extends HTMLAttributes<HTMLElement> {
  isVisible: boolean;
  opacity: number;
  translateY: number;
}

export const Message = styled.div<Props>`
  position: fixed;
  top: 35vh;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 3em;
  margin: 5px 0;
  font-size: 3.5rem;
  visibility: hidden;

  opacity: ${(props) => props.opacity ?? 0};
  transform: translateY(${(props) => `${props.translateY}%` ?? 0});
  ${(props) => props.isVisible && visibleStyle};

  & > p {
    font-weight: bold;
    text-align: center;
    line-height: 1.2;
  }

  & small {
    display: block;
    margin-bottom: 0.5em;
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 4vw;

    & small {
      font-size: 1.5vw;
    }
  }
`;
