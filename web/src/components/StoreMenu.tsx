import { ShoppingCartSimple, Storefront } from "phosphor-react"
import { useNavigate } from 'react-router-dom';

const StoreMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-16 overflow-hidden">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="flex gap-3 text-3xl text-white font-black">
            Store
            <Storefront weight="duotone" size={36}/>
          </strong>
        </div>

        <div className="flex gap-6 justify-center items-center">
          <strong className="text-3xl text-white font-black block">
            Saldo
          </strong>

          <div className="flex bg-zinc-900 w-[126px] h-[38px] rounded-sm justify-center items-center">
            <span className="text-2xl text-white font-semibold block">
              R$ {Number(localStorage.getItem('balance'))}
            </span>
          </div>

          <button onClick={() => {navigate('/shopping-cart')}} className="py-3 px-4 bg-red-500 hover:bg-red-600 text-white rounded flex justify-center items-center gap-3">
            <ShoppingCartSimple size={24} weight={"duotone"} color={'#fff'} />
            <strong>Carrinho de compras</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreMenu;
