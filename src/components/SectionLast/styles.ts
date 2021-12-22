import styled from 'styled-components';

interface SectionProps {
  customHeight: number;
}

export const Section = styled.section<SectionProps>`
  height: ${(props) => props.customHeight + 'px'};
`;
