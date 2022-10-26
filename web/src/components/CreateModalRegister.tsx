import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";
import { useForm } from 'react-hook-form'
import { useContext } from 'react'

import { LoginContext } from "../Context/LoginContext";

const CreateModalRegister = () => {
  const { register, handleSubmit } = useForm()
  const { registering } = useContext(LoginContext)

  const handleRegister = (data:any) => {
    registering(data)
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

      <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[30rem] shadow-lg shadow-black/25'>
        <Dialog.Title className="text-white font-black text-4xl">Registrar-se</Dialog.Title>
        <form onSubmit={handleSubmit(handleRegister)} className='mt-8 flex flex-col gap-4'>
          <div className="flex flex-col gap-4">

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white text-base font-normal">
                Endereço de E-mail
              </label>

              <input
                {...register('email')}
                className="bg-zinc-900 h-12 rounded pl-4 text-white"
                placeholder="fulano@email.com"
                type="email"
                name="email"
                id="email"
              />
              
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-white text-base font-normal">
                Senha
              </label>

              <input
                {...register('password')}
                className="bg-zinc-900 h-12 rounded pl-4 text-white"
                placeholder="********"
                type="password"
                name="password"
                id="password"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-white text-base font-normal">
                Nome Completo
              </label>

              <input
                {...register('name')}
                className="bg-zinc-900 h-12 rounded pl-4 text-white"
                placeholder="Gabriel Silva de Oliveira"
                type="text"
                name="name"
                id="name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="github" className="text-white text-base font-normal">
                Usuário GitHub
              </label>

              <input
                {...register('userGitHub')}
                className="bg-zinc-900 h-12 rounded pl-4 text-white"
                placeholder="git-hub"
                type="text"
                name="userGitHub"
                id="userGitHub"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="birthday" className="text-white text-base font-normal">
                Data de Nascimento
              </label>

              <input
                {...register('birthday')}
                className="bg-zinc-900 h-12 rounded pl-4 text-white"
                placeholder="XX/YY/ZZZZ"
                type="text"
                name="birthday"
                id="birthday"
              />
            </div>
          </div>

          <div className="flex justify-end items-center gap-5">
            <button className="bg-zinc-500 text-white text-base font-semibold h-12 w-28 rounded-md">
              Cancelar
            </button>

            <button className="bg-red-500 text-white text-base font-semibold h-12 w-[170px] rounded-md flex items-center justify-center gap-3">
              <GameController size={24} />
              Registrar-se
            </button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default CreateModalRegister;
