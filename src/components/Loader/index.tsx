import { CircleSVG, Container } from './style';

interface Props {
  isLoading: boolean;
}

export const Loader = ({ isLoading }: Props) => {
  return (
    <Container isLoading={isLoading}>
      <CircleSVG>
        <circle cx="50%" cy="50%" r="25"></circle>
      </CircleSVG>
    </Container>
  );
};
