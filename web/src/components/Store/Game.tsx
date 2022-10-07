import React, { FC } from "react";

interface GameProps {
  name: string
  imagePath: string
}

const Game: FC<GameProps> = ({ name, imagePath }) => {
  return (
    <div>
      <a href="" className="relative rounded-lg overflow-hidden">
          <img src={imagePath} alt="" />

          <div className="w-full rounded-lg pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">{name}</strong>
          </div>
      </a>
    </div>
  )
}

export default Game
