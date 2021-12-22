import styled from 'styled-components';

interface SectionProps {
  customHeight: number;
  customTransform: string;
}

export const Section = styled.section<SectionProps>`
  height: ${(props) => props.customHeight + 'px'};
  transform: ${(props) => props.customTransform};
`;
