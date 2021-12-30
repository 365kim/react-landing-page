import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

const visibleStyle = css`
  display: block;
  will-change: transform, opacity;
`;

interface StickyProps extends HTMLAttributes<HTMLElement> {
  isVisible: boolean;
}

export const StickyElement = styled.div<StickyProps>`
  display: none;
  position: fixed;
  left: 0;
  width: 100%;

  ${(props) => props.isVisible && visibleStyle}
`;

interface CanvasProps extends HTMLAttributes<HTMLCanvasElement> {
  opacity?: number;
  scale?: number;
}

export const Canvas = styled.canvas<CanvasProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: ${(props) => props.opacity ?? 1};
  transform: translate3d(-50%, -50%, 0) scale(${(props) => props.scale ?? 1});
`;
