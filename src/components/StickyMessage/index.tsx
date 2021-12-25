import { HTMLAttributes } from 'react';
import { Message } from './styles';

interface Props extends HTMLAttributes<HTMLElement> {
  isVisible: boolean;
  opacity: number;
  translateY: number;
}

export const StickyMessage = ({ isVisible = false, opacity, translateY, children, ...rest }: Props) => {
  return (
    <Message isVisible={isVisible} opacity={opacity} translateY={translateY} {...rest}>
      {children}
    </Message>
  );
};
