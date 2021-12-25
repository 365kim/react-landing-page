import { HTMLAttributes } from 'react';
import { Canvas, StickyElement } from './styles';

interface Props extends HTMLAttributes<HTMLElement> {
  isVisible: boolean;
  opacity: number;
  width: number;
  height: number;
  scale: number;
}

export const StickyCanvas = ({ id, isVisible = false, width, height, opacity, scale, ...rest }: Props) => {
  return (
    <StickyElement id={id} isVisible={isVisible} {...rest}>
      <Canvas width={width} height={height} opacity={opacity} scale={scale}></Canvas>
    </StickyElement>
  );
};
