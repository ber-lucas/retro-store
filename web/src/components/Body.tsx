import axios from 'axios';
import { useState, useEffect } from 'react'

import GameBanner from "./GameBanner";

interface Game {
  id: string,
  title: string,
  about: string,
  bannerUrl: string,
  tag: string,
  trailer: string,
  userReviews: number,
  specifications: string,
  price: number
}

const Body = () => {
  const [games, setGames] = useState<Game[]>([])
  
  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(response => setGames(response.data))
  }, [])

  return (
    <main className="grid grid-cols-6 gap-6 py-8">
      {games.map(game => {
        return (
          <GameBanner imagePath={game.bannerUrl} name={game.title} />
        )
      })}     
    </main>
  );
};

export default Body;
