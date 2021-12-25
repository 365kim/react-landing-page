import { SectionToScroll } from './styles';

interface Props extends Partial<Omit<HTMLElement, 'children'>> {
  sectionHeight: number;
  customTransform?: string;
  children: JSX.Element | JSX.Element[];
}

export const Section = ({ children, sectionHeight, customTransform }: Props) => {
  return (
    <SectionToScroll sectionHeight={sectionHeight} customTransform={customTransform}>
      {children}
    </SectionToScroll>
  );
};
