import * as Dialog from '@radix-ui/react-dialog';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { LoginContext } from '../Context/LoginContext';

export function CreateModalEditProfile () {
    const { handleSubmit, register } = useForm()
    const { updateProfile } = useContext(LoginContext)

    const handleEditProfile = (data:any) => {
        updateProfile(data)
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[30rem] shadow-lg shadow-black/25'>
                <Dialog.Title className="text-white font-black text-4xl">Editar Perfil</Dialog.Title>
                <form onSubmit={handleSubmit(handleEditProfile)} className='mt-8 flex flex-col gap-4'>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor='email' className="text-white text-base font-normal">
                                Informe o novo Email
                            </label>
                            
                            <input
                            {...register('email')}
                            className="bg-zinc-900 h-12 rounded pl-4 text-white"
                            placeholder="Jorginho"
                            name="email"
                            id="email"
                            />
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <label htmlFor='password' className="text-white text-base font-normal">
                                Informe a nova Senha
                            </label>
                            
                            <input
                            {...register('password')}
                            className="bg-zinc-900 h-12 rounded pl-4 text-white"
                            placeholder="Jorginho"
                            name="password"
                            id="password"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor='name' className="text-white text-base font-normal">
                                Informe o novo Nome
                            </label>

                            <input
                            {...register('name')}
                            className="bg-zinc-900 h-12 rounded pl-4 text-white"
                            placeholder="Jorginho"
                            name="name"
                            id="name"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor='birthday' className="text-white text-base font-normal">
                                Informe a nova Data de Nascimento
                            </label>

                            <input
                            {...register('birthday')}
                            className="bg-zinc-900 h-12 rounded pl-4 text-white"
                            placeholder="11/08/1990"
                            name="birthday"
                            id="birthday"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor='userGitHub' className="text-white text-base font-normal">
                                Informe o novo Usuário do GitHub
                            </label>

                            <input
                            {...register('userGitHub')}
                            className="bg-zinc-900 h-12 rounded pl-4 text-white"
                            placeholder="45"
                            name="userGitHub"
                            id="userGitHub"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end items-center gap-5">
                        <Dialog.Close type="button" className="bg-[#71717A] hover:bg-[#62626a] text-white text-base font-semibold h-12 w-28 rounded-md">
                            Cancelar
                        </Dialog.Close>

                        <button type="submit" className="bg-[#22C55E] hover:bg-[#199a48] text-white text-base font-semibold h-12 w-[170px] rounded-md flex items-center justify-center gap-3">
                            Salvar
                        </button>
                    </div>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    );
};

export default CreateModalEditProfile;
