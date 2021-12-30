import { HTMLAttributes, useEffect, useRef } from 'react';

const isCanvasSupported = ($canvas: HTMLCanvasElement | null) => $canvas && $canvas.getContext;

import { Canvas, StickyElement } from './styles';

interface Props extends HTMLAttributes<HTMLElement> {
  isVisible: boolean;
  opacity?: number;
  width: number;
  height: number;
  scale?: number;
  draw: (context: CanvasRenderingContext2D, ...args: any[]) => void;
}

export const StickyCanvas = ({ id, isVisible = false, width, height, draw, opacity, scale, ...rest }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const $canvas = canvasRef.current;

    if (!$canvas || !isCanvasSupported($canvas)) {
      return;
    }

    const canvasContext = $canvas.getContext('2d');

    draw(canvasContext);
  }, [canvasRef.current]);

  return (
    <StickyElement id={id} isVisible={isVisible} {...rest}>
      <Canvas ref={canvasRef} width={width} height={height} opacity={opacity} scale={scale}></Canvas>
    </StickyElement>
  );
};
