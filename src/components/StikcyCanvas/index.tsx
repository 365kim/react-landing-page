import { StickyElement } from './styles';

interface Props extends HTMLCanvasElement {
  isVisible: boolean;
}

export const StickyCanvas = ({ id, isVisible = false, width, height }: Props) => {
  return (
    <StickyElement id={id} isVisible={isVisible}>
      <canvas width={width} height={height}></canvas>
    </StickyElement>
  );
};
