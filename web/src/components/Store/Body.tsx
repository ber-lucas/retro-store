import React from "react";
import Game from "./Game";

const Body = () => {
  return (
    <div className="bg-zinc-400/20 grid grid-cols-6 gap-6 mt-5 px-[80px] py-8 rounded-lg">
        <Game imagePath="/game-1.png" name="League of Legends" />
        <Game imagePath="/game-2.png" name="Dota 2" />
        <Game imagePath="/game-3.png" name="Counter Strike" />
        <Game imagePath="/game-4.png" name="Apex Legends" />
        <Game imagePath="/game-5.png" name="Fortnite" />
        <Game imagePath="/game-6.png" name="World of Warcraft" />

        <Game imagePath="/game-1.png" name="League of Legends" />
        <Game imagePath="/game-2.png" name="Dota 2" />
        <Game imagePath="/game-3.png" name="Counter Strike" />
        <Game imagePath="/game-4.png" name="Apex Legends" />
        <Game imagePath="/game-5.png" name="Fortnite" />
        <Game imagePath="/game-6.png" name="World of Warcraft" />
        
        <Game imagePath="/game-1.png" name="League of Legends" />
        <Game imagePath="/game-2.png" name="Dota 2" />
        <Game imagePath="/game-3.png" name="Counter Strike" />
        <Game imagePath="/game-4.png" name="Apex Legends" />
        <Game imagePath="/game-5.png" name="Fortnite" />
        <Game imagePath="/game-6.png" name="World of Warcraft" />
    </div>
  );
};

export default Body;
