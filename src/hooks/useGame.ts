﻿import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import Game from '../entities/Game';
import ms from 'ms';

const apiClient = new APIClient<Game>(`/games`);

const useGame = (slug: string) => {
  return useQuery<Game>({
    queryKey: ['game', slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms('24h'),
  });
};

export default useGame;
