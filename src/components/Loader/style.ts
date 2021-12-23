import styled, { css } from 'styled-components';

const loadingStyle = css`
  opacity: 1;
`;

interface Props {
  isLoading: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background: white;
  opacity: 0;
  transition: 0.5s;

  ${(props) => props.isLoading && loadingStyle}
`;

export const CircleSVG = styled.svg`
  width: 54px;
  height: 54px;
  animation: loading-spin 3s infinite;

  @keyframes loading-spin {
    100% {
      transform: rotate(360deg);
    }
  }

  & circle {
    stroke: black;
    stroke-width: 4;
    /* getTotalLength()로 stroke의 길이를 얻어올 수 있음 */
    stroke-dasharray: 157, 157;
    stroke-dashoffset: 0;
    fill: transparent;
    animation: loading-circle 1s infinite;
    /* transition: 1s; */
    @keyframes loading-circle {
      0% {
        stroke-dashoffset: 157;
      }
      75% {
        stroke-dashoffset: -147;
      }
      100% {
        stroke-dashoffset: -157;
      }
    }
  }
`;
