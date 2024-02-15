import useGameTrailers from '../hooks/useGameTrailers';

interface Props {
  gameId: string | number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameTrailers(gameId);
  const first = data?.results[0];

  if (isLoading) return null;

  if (error) throw error;

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
