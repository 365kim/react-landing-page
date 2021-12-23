import styled from 'styled-components';

interface Props {
  customHeight: number;
  customTransform?: string;
}

export const SectionToScroll = styled.section<Props>`
  position: relative;
  padding-top: 50vh;
  height: ${(props) => props.customHeight + 'px'};
  transform: ${(props) => props.customTransform || 'none'};
`;
