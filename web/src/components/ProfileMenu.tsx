import { ArrowRight, Books, GameController } from 'phosphor-react';
import { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';

const Menu = () => {
  const { user } = useContext(LoginContext)

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
          <div className='flex gap-2 text-3xl text-white'>
            <strong className='font-black'>
              Jogos
            </strong>

            <div className='flex justify-center items-center gap-2 h-11 py-3 px-4 bg-zinc-900 rounded'>
              {user?._count.games}
              <ArrowRight size={18} />
              < GameController size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
