import styled from 'styled-components';

export const Paragraph = styled.p`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  line-height: 1.6;
  font-size: 1.2rem;
  color: #888;

  & > strong {
    float: left;
    margin-right: 0.2em;
    font-size: 3rem;
    color: rgb(29, 29, 31);
  }
`;
