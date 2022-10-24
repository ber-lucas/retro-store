import axios from 'axios';
import { useState, useEffect, useContext } from 'react'

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

const BodyProfile = () => {
  const [games, setGames] = useState<Game[]>([])
  const user = localStorage.getItem('token')

  useEffect(() => {
    axios(`http://localhost:3333/user/${user}/games`)
      .then(response => response.data)
      .then(data => data[0])
      .then(response => setGames(response.games)) 
  }, [user])

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
          price={game.price}
          />
        )
      })}     
    </main>
  );
};

export default BodyProfile;
