import { SignIn, UserPlus } from "phosphor-react"
import GameBanner from "../components/GameBanner"
import Header from "../components/Header"

function Landing() {
    return (
        <div className="flex flex-col items-center gap-16">
            <Header />

            <img src="Logo.svg" alt="Logo Retro Store" />

            <div className="flex flex-col gap-2">
                <main className="grid grid-cols-6 gap-6 py-8 rounded-lg">
                    <GameBanner imagePath="/game-1.png" name="League of Legends" />
                    <GameBanner imagePath="/game-2.png" name="Dota 2" />
                    <GameBanner imagePath="/game-3.png" name="Counter Strike" />
                    <GameBanner imagePath="/game-4.png" name="Apex Legends" />
                    <GameBanner imagePath="/game-5.png" name="Fortnite" />
                    <GameBanner imagePath="/game-6.png" name="World of Warcraft" />

                    <GameBanner imagePath="/game-1.png" name="League of Legends" />
                    <GameBanner imagePath="/game-2.png" name="Dota 2" />
                    <GameBanner imagePath="/game-3.png" name="Counter Strike" />
                    <GameBanner imagePath="/game-4.png" name="Apex Legends" />
                    <GameBanner imagePath="/game-5.png" name="Fortnite" />
                    <GameBanner imagePath="/game-6.png" name="World of Warcraft" />
                </main>

                <div className='pt-1 bg-nlw-gradient rounded-lg mb-8'>
                    <div className='bg-[#2A2632] px-8 py-6 flex justify-between items-center'>
                        <div>
                            <strong className='text-2xl text-white font-black block'>Gostou de algum dos games?</strong>
                            <span className='text-zinc-400 block'>Registre um perfil para começar a comprar, vender e adicionar games!</span>
                        </div>

                        <div className="flex flex-row gap-5">
                            <button className='py-3 px-4 bg-red-500 text-white hover:bg-red-600 rounded flex items-center gap-3'>
                                <UserPlus size={24} />
                                Registre-se
                            </button>

                            <button className='py-3 px-4 bg-red-500 text-white hover:bg-red-600 rounded flex items-center gap-3'>
                                <SignIn size={24} />
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing