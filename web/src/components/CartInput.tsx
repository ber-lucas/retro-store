import { Minus } from "phosphor-react";

interface Game {
    title: string,
    bannerUrl: string,
    price: number
}

const CartInput = (games:Game) => {

    return (
        <header className=" justify-between flex w-[80rem] h-[18rem] mt-8 py-6 px-12 bg-[#fdfeff0f]" style={{'boxShadow': '0px 4px 4px rgba(0, 0, 0, 0.25)', 'borderRadius': '8px'}}>
        <img className="h-60 w-44" src={games.bannerUrl} alt="" />
            
            
            <div className="flex items-center">
            <div className="flex text-3xl text-white font-black">
                {games.title}
            </div>
            </div>

            <div className="flex self-end gap-4">
              <div className="flex items-center justify-center py-2 px-4 bg-amber-300 rounded-md font-semibold hover:bg-amber-400 text-center">
                  R$ {games.price}
              </div>

              <div className="flex items-center justify-center py-2 px-3 text-white bg-red-500 rounded-md font-semibold hover:bg-red-600">
                <button className="flex items-center">
                  <Minus className="" size={32} />
                </button> 
              </div>
            </div>
    </header>
    )
  }
  
  export default CartInput;