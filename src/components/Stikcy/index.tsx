import { StickyElement } from './styles';

interface Props {
  isVisible: boolean;
}

export const Sticky = ({ isVisible = false }: Props) => {
  return <StickyElement isVisible={isVisible}></StickyElement>;
};
