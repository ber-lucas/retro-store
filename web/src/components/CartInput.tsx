import { Minus } from "phosphor-react";

interface GameBannerProps {
    imagePath: string,
    name: string,
  }
  
  const CartInput = (props: GameBannerProps) => {
    return (
        <header className=" justify-between flex w-[80rem] h-[18rem] mt-8 py-6 px-12 bg-[#fdfeff0f]" style={{'boxShadow': '0px 4px 4px rgba(0, 0, 0, 0.25)', 'borderRadius': '8px'}}>
        <img className="h-60 w-44" src={props.imagePath} alt="" />
            
            
            <div className="flex items-center">
            <div className="flex text-3xl text-white font-black">
                {props.name}
            </div>
            </div>

            <div className="flex self-end flex-row gap-4">
                <div className="flex items-center justify-center bg-amber-300 rounded-md font-semibold w-24 h-12 hover:bg-amber-700 text-center">
                    <div className="flex">R$ 35,95</div>
                </div>
                <div className="flex items-center justify-center text-white bg-red-500 rounded-md font-semibold w-56 h-12 hover:bg-red-700">
              <button className="flex items-center">
                   <Minus className="" size={32} />
                 <div className="">Remover do carrinho</div>
              </button> 
            </div>
            </div>
    </header>
    )
  }
  
  export default CartInput;