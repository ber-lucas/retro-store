import axios from 'axios';
import { useState, useEffect, useContext } from 'react'

import GameBanner from "./GameBanner";
import { LoginContext } from '../Context/LoginContext'

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
    axios(`http://localhost:3333/games`)
      .then(response => setGames(response.data))   
  }, [])

  return (
    <main className="grid grid-cols-7 gap-6 py-8">
      {games.map(game => {
        return (
          <GameBanner 
            key={game.id}
            title={game.title}
            about={game.about}
            bannerUrl={game.bannerUrl}
            tag={game.tag}
            trailer={game.trailer}
            userReviews={game.userReviews}
            specifications={game.specifications}
            price={game.price} id={game.id}          />
        )
      })}     
    </main>
  );
};

export default Body;
