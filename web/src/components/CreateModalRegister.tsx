import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";

const CreateModalRegister = () => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

      <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[30rem] shadow-lg shadow-black/25'>
        <Dialog.Title className="text-white font-black text-4xl">Registrar-se</Dialog.Title>
        <form className='mt-8 flex flex-col gap-4'>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-base font-normal">
                Endereço de E-mail
              </h1>
              <input
                className="bg-zinc-900 h-12 rounded pl-4 text-white"
                placeholder="fulano@email.com"
                type="email"
                name="inputEmail"
                id="inputEmail"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-white text-base font-normal">Nome Completo</h1>
              <input
                className="bg-zinc-900 h-12 rounded pl-4 text-white"
                placeholder="Gabriel Silva de Oliveira"
                type="text"
                name="inputName"
                id="inputName"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-white text-base font-normal">Senha</h1>
              <input
                className="bg-zinc-900 h-12 rounded pl-4 text-white"
                placeholder="********"
                type="password"
                name="inputPassword"
                id="inputPassword"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-white text-base font-normal">
                Data de Nascimento
              </h1>
              <div className="flex gap-2">
                <input
                  className="w-20 bg-zinc-900 h-12 rounded pl-4 text-white"
                  placeholder="Dia"
                  type="number"
                  name="inputDay"
                  id="inputDay"
                />
                <input
                  className="w-20 bg-zinc-900 h-12 rounded pl-4 text-white"
                  placeholder="Mês"
                  type="number"
                  name="inputMonth"
                  id="inputMonth"
                />
                <input
                  className="w-20 bg-zinc-900 h-12 rounded pl-4 text-white"
                  placeholder="Ano"
                  type="number"
                  name="inputYear"
                  id="inputYear"
                />
              </div>
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
