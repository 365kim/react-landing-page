import { HTMLAttributes } from 'react';
import { StickyElement } from './styles';

interface Props extends HTMLAttributes<HTMLElement> {
  isVisible: boolean;
}

export const StickyCanvas = ({ id, isVisible = false, ...rest }: Props) => {
  return (
    <StickyElement id={id} isVisible={isVisible} {...rest}>
      <canvas></canvas>
    </StickyElement>
  );
};
