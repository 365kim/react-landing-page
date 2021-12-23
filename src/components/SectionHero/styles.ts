import styled from 'styled-components';

export const Heading = styled.h1`
  position: relative;
  top: -10vh;
  z-index: 5;
  font-size: 4rem;
  text-align: center;
`;

export const MainMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 35vh;
  margin: 5px 0;
  height: 3em;
  font-size: 2.5rem;
  opacity: 0;

  & > p {
    font-weight: bold;
    text-align: center;
    line-height: 1.2;
  }
`;
