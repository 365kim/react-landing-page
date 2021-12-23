import styled, { css } from 'styled-components';

const visibleStyle = css`
  display: block;
  will-change: transform, opacity;
`;

interface Props {
  isVisible: boolean;
}

export const StickyElement = styled.div<Props>`
  display: none;
  position: fixed;
  left: 0;
  width: 100%;

  ${(props) => (props.isVisible ? visibleStyle : null)}
`;
