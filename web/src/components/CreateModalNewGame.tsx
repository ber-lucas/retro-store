import * as Dialog from '@radix-ui/react-dialog';

export function CreateModalNewGame () {
  return (
    <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

        <Dialog.Content className="h-[100vh] flex justify-center items-center">
            <div
                title="Caixa Azul"
                className="px-10 h-[601px] w-[488px] bg-[#2A2634] flex flex-col justify-center rounded-lg shadow gap-8"
            >
                <Dialog.Title className="text-white font-black text-4xl">Adicionar Novo Jogo</Dialog.Title>
                <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h1 className="text-white text-base font-normal">
                    Nome do Jogo
                    </h1>
                    <input
                    className="bg-zinc-900 h-12 rounded pl-4 text-white"
                    placeholder="Valorant"
                    type="text"
                    name="inputNewGameName"
                    id="inputNewGameName"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-white text-base font-normal">
                    Data de lançamento
                    </h1>
                    <input
                    className="bg-zinc-900 h-12 rounded pl-4 text-white"
                    placeholder="2020"
                    type="number"
                    name="inputNewGameDate"
                    id="inputNewGameDate"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-white text-base font-normal">
                    Empresa
                    </h1>
                    <input
                    className="bg-zinc-900 h-12 rounded pl-4 text-white"
                    placeholder="Riot Games"
                    type="text"
                    name="inputNewGameCompany"
                    id="inputNewGameCompany"
                    />
                </div>
                </div>
                <div className="flex justify-end items-center gap-5">
                <Dialog.Close type="button" className="bg-[#71717A] hover:bg-[#62626a] text-white text-base font-semibold h-12 w-28 rounded-md">
                    Cancelar
                </Dialog.Close>
                <button type="submit" className="bg-[#22C55E] hover:bg-[#199a48] text-white text-base font-semibold h-12 w-[170px] rounded-md flex items-center justify-center gap-3">
                    Confirmar
                </button>
                </div>
            </div>
        </Dialog.Content>
    </Dialog.Portal>
  );
};

export default CreateModalNewGame;
