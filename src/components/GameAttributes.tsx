﻿import { Text, SimpleGrid, Link } from '@chakra-ui/react';
import DefinitionItem from './DefinitionItem';
import CriticScore from './CriticScore';
import Game from '../entities/Game';

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as='dl'>
      <DefinitionItem term='Platforms'>
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term='Genres'>
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term='Publishers'>
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term='Metascore'>
        <CriticScore score={game.metacritic} />
      </DefinitionItem>

      <DefinitionItem
        term='Release date
'
      >
        <Text>{game.released}</Text>
      </DefinitionItem>

      <DefinitionItem
        term='Website
'
      >
        <Link href={game.website} target='_blank'>
          {game.website}
        </Link>
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
