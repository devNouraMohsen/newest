import React, { useEffect, useState } from 'react'
import apiClient from './services/api-client';

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient.get<FetchGamesResponse>('/games')
        .then(res => setGames(res.data.results))
        .catch(error => setError(error.message));
    })
  return (
    <>
        {error && <text>{error}</text>}
        <ul>
          {games.map((game) => (
            <li key={game.id}>{game.name}</li>))}
        </ul> 
    </>
  )
}

export default GameGrid
