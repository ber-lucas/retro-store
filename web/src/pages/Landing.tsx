import { SignIn, UserPlus } from "phosphor-react"
import * as Dialog from "@radix-ui/react-dialog"

import Header from "../components/Header"
import CreateModalRegister from "../components/CreateModalRegister"
import CreateModalLogin from "../components/CreateModalLogin"
import BodyLanding from "../components/BodyLanding"

function Landing() {
    return (
        <div className="max-w-[1360px] mx-auto flex flex-col items-center gap-16 py-8">
            <Header />

            <img src="Logo.svg" alt="Logo Retro Store" />

            <div className="flex flex-col gap-2"> 
                <BodyLanding />

                <div className='pt-1 bg-nlw-gradient rounded-lg overflow-hidden'>
                    <div className='bg-[#2A2632] px-8 py-6 flex justify-between items-center'>
                        <div>
                            <strong className='text-2xl text-white font-black block'>Gostou de algum dos games?</strong>
                            <span className='text-zinc-400 block'>Registre um perfil para começar a comprar, vender e adicionar games!</span>
                        </div>

                        <div className="flex flex-row gap-5">
                            <Dialog.Root>
                                <Dialog.Trigger className='py-3 px-4 bg-red-500 text-white hover:bg-red-600 rounded flex items-center gap-3'>
                                    <UserPlus size={24} />
                                    Registre-se
                                </Dialog.Trigger>

                                <CreateModalRegister />
                            </Dialog.Root>

                            <Dialog.Root>   
                                <Dialog.Trigger className='py-3 px-4 bg-red-500 text-white hover:bg-red-600 rounded flex items-center gap-3'>
                                    <SignIn size={24} />
                                    Login
                                </Dialog.Trigger>

                                <CreateModalLogin />
                            </Dialog.Root>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing