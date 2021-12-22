import styled from 'styled-components';

interface SectionProps {
  customHeight: number;
}

export const Section = styled.section<SectionProps>`
  height: ${(props) => props.customHeight + 'px'};
`;

export const MainMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 35vh;
  margin: 5px 0;
  height: 3em;
  font-size: 3.5rem;
  opacity: 0;

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
`;
