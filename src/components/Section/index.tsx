import { SectionToScroll } from './styles';

interface Props extends Partial<Omit<HTMLElement, 'children'>> {
  customHeight: number;
  customTransform?: string;
  children: JSX.Element | JSX.Element[];
}

export const Section = ({ children, customHeight, customTransform }: Props) => {
  return (
    <SectionToScroll customHeight={customHeight} customTransform={customTransform}>
      {children}
    </SectionToScroll>
  );
};
