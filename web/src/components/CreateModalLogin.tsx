import { GameController } from "phosphor-react";

const CreateModalLogin = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div
        title="Caixa Azul"
        className="px-10 py-8 bg-[#2A2634] h-[411px] w-[488px] flex flex-col rounded-lg shadow gap-8"
      >
        <h1 className="text-white font-black text-4xl">Login</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-base font-semibold">Email</h1>
            <input
              className="bg-zinc-900 h-12 rounded pl-4 text-white"
              placeholder="fulano@email.com"
              type="email"
              name="inputEmail"
              id="inputEmail"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-base font-semibold">Senha</h1>
            <input
              className="bg-zinc-900 h-12 rounded pl-4 text-white"
              placeholder="********"
              type="password"
              name="inputPassword"
              id="inputPassword"
            />
          </div>
        </div>
        <div className="flex justify-end items-center gap-5">
          <button className="bg-zinc-500 text-white text-base font-semibold h-12 w-28 rounded-md">
            Cancelar
          </button>
          <button className="bg-red-500 text-white text-base font-semibold h-12 w-28 rounded-md flex items-center justify-center gap-3">
            <GameController size={24} />
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateModalLogin;
