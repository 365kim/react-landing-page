import { HTMLAttributes } from 'react';
import { StickyElement } from './styles';

interface Props extends HTMLAttributes<HTMLElement> {
  isVisible: boolean;
}

export const Sticky = ({ isVisible = false, ...rest }: Props) => {
  return <StickyElement isVisible={isVisible} {...rest}></StickyElement>;
};
