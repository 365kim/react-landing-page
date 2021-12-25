import { SectionToScroll } from './styles';

interface Props extends Partial<Omit<HTMLElement, 'children'>> {
  sectionHeight: number;
  children: JSX.Element | JSX.Element[];
}

export const Section = ({ children, sectionHeight }: Props) => {
  return <SectionToScroll sectionHeight={`${sectionHeight}px`}>{children}</SectionToScroll>;
};
