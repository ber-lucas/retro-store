import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import { GameController } from "phosphor-react";
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { LoginContext } from '../Context/LoginContext'

const CreateModalLogin = () => {
  const { signIn, user } = useContext(LoginContext)
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const handleLogin = (data:any) => {
    signIn(data).then(response => response ? navigate('/profile') : null)
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

      <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[30rem] shadow-lg shadow-black/25'>
        <Dialog.Title className="font-black text-4xl">Login</Dialog.Title>

        <form onSubmit={handleSubmit(handleLogin)} className='mt-8 flex flex-col gap-4'>
          <div className="flex flex-col gap-4">

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className=" text-base font-semibold">Email</label>
              <input {...register('email')} name="email" id="email" type='email' className='bg-zinc-900 placeholder:text-zinc-500 py-3 px-4 rounded text-sm' placeholder="fulano@gmail.com"/>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-base font-semibold">Senha</label>
              <input {...register('password')} name="password" id="password" type='password' className='bg-zinc-900 placeholder:text-zinc-500 py-3 px-4 rounded text-sm' placeholder="******" />
            </div>

          </div>
          <div className="flex justify-end items-center gap-5">

            <button className="bg-zinc-500 text-base font-semibold h-12 w-28 rounded-md">
              Cancelar
            </button>

            <button className="bg-red-500 text-base font-semibold h-12 w-28 rounded-md flex items-center justify-center gap-3">
              <GameController size={24} />
              Login
            </button>

          </div>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default CreateModalLogin;
