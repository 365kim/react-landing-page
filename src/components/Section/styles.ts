import styled from 'styled-components';

interface Props {
  sectionHeight: number;
  customTransform?: string;
}

export const SectionToScroll = styled.section<Props>`
  position: relative;
  padding-top: 50vh;
  height: ${(props) => props.sectionHeight + 'px'};
  transform: ${(props) => props.customTransform || 'none'};
`;
