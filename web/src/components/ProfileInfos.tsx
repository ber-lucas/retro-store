import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../Context/LoginContext';
import { CreateModalBalance } from './CreateModalBalance';
import { CreateModalEditProfile } from './CreateModalEditProfile';

const ProfileInfos = () => {
    const { user } = useContext(LoginContext)
    const [avatar, setAvatar] = useState(localStorage.getItem('avatar'))
 
    useEffect(() => {
        axios(`https://api.github.com/users/${user?.userGitHub}`)
            .then(response => response.data)
            .then(data => {
                localStorage.setItem('avatar', data.avatar_url)

                return setAvatar(data.avatar_url)
            })
    }, [user])

    return (
        <header className="w-[72rem] h-[23rem] my-11 px-12 flex justify-between items-center bg-[#fdfeff0f]" style={{ 'boxShadow': '0px 4px 4px rgba(0, 0, 0, 0.25)', 'borderRadius': '8px' }}>
            
            <img src={String(avatar)} className='h-56 rounded-full' />

            <div>
                <strong className="text-4xl text-white font-black block">
                    Perfil
                </strong>
                <div className='flex flex-col gap-2 mt-5 text-white'>
                    <label htmlFor="name" className='font-semibold' style={{ 'color': '#ffffff' }}>Nome completo</label>
                    <div className='flex items-center bg-zinc-900 py-3 px-4 rounded text-base h-11'>{user?.name}</div>
                    <label htmlFor="date" className='font-semibold' style={{ 'color': '#ffffff' }}>Data de Nascimento</label>
                    <div className='flex items-center justify-center bg-zinc-900 py-3 px-4 rounded text-base h-11'>{user?.birthday}</div>
                    <label htmlFor="number" className='font-semibold' style={{ 'color': '#ffffff' }}>Jogos na Biblioteca</label>
                    <div className='flex items-center justify-center bg-zinc-900 py-3 px-4 rounded text-base font-semibold h-11 w-16'>{user?._count.games}</div>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div>
                    <strong className="text-4xl text-white font-black">
                        Saldo
                    </strong>
                </div>

                <div className="flex bg-zinc-900 w-[126px] h-[38px] mt-5 rounded-sm justify-center items-center">
                    <span className="text-2xl text-white font-semibold block">
                        R$ {user?.balance}
                    </span>
                </div>

                <div className="mt-8 flex flex-col items-center">
                    <Dialog.Root>
                        <Dialog.Trigger className="py-3 px-4 bg-green-500 hover:bg-green-600 text-white rounded flex items-center gap-3">
                            <img src="/ProfileCoin.svg" alt="" />
                            <strong>Adicionar Saldo</strong>
                        </Dialog.Trigger>

                        <CreateModalBalance />
                    </Dialog.Root>
                    <Dialog.Root>
                            <Dialog.Trigger className="py-3 px-8 mt-5 bg-zinc-500 hover:bg-zinc-600 text-white rounded flex items-center gap-3">
                                <strong>Editar Perfil</strong>
                            </Dialog.Trigger>
                        <CreateModalEditProfile />
                    </Dialog.Root>
                </div>
            </div>

        </header>
    )
}

export default ProfileInfos;

