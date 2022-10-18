import * as Dialog from '@radix-ui/react-dialog';
import { Books, Plus } from 'phosphor-react';
import CreateModalNewGame from './CreateModalNewGame';

const Menu = () => {
  return (
    <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="flex gap-3 text-3xl text-white font-black">
            Biblioteca
            <Books weight='duotone' size={36}/>
          </strong>
        </div>

        <div className="flex gap-6 justify-center items-center">
          <Dialog.Root>
            <Dialog.Trigger className="py-3 px-4 bg-green-500 hover:bg-green-600 text-white rounded flex items-center gap-3">
              <Plus weight='bold' size={24}/>
              <strong>Adicionar novo jogo</strong>
            </Dialog.Trigger>
            
            <CreateModalNewGame />
          </Dialog.Root>
        </div>
      </div>
    </div>
  );
};

export default Menu;
