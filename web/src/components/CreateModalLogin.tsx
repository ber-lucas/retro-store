import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import { GameController } from "phosphor-react";
import { FormEvent, useEffect, useState } from 'react'

import { Input } from '../Form/Input'

interface Login {
  id: String
}

const CreateModalLogin = () => {
  const [login, setLogin] = useState<Login[]>([])

  useEffect(() => {
    if(login.length)
      console.log('Consegui')
  
  }, [login]) 

  const handleLogin = (event: FormEvent) => {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)

    const data = Object.fromEntries(formData)

    if(!data.password)
      return

    axios(`http://localhost:3333/user/${data.email}-${data.password}/login`)
      .then(response => setLogin(response.data))

      //alert('Deu certo!')  
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

      <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[30rem] shadow-lg shadow-black/25'>
        <Dialog.Title className="font-black text-4xl">Login</Dialog.Title>

        <form onSubmit={handleLogin} className='mt-8 flex flex-col gap-4'>
          <div className="flex flex-col gap-4">

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className=" text-base font-semibold">Email</label>
              <Input name="email" id="email" type='email' placeholder="fulano@gmail.com"/>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-base font-semibold">Senha</label>
              <Input name="password" id="password" type='password' placeholder="******" />
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
