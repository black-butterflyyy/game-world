﻿import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow='hidden'
      _hover={{
        cursor: 'pointer',
        transform: 'scale(1.03)',
        transition: 'transform .30s ease-in',
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
