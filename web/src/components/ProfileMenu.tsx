const Menu = () => {
  return (
    <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-16 overflow-hidden">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-4xl text-white font-black block">
            Biblioteca
          </strong>
        </div>

        <div className="flex gap-6 justify-center items-center">
          <button className="py-2 px-4 bg-[#22C55E] hover:bg-[#199a48] text-white rounded flex items-center gap-3">
            <strong className="text-[27px]">+</strong>
            <strong className="text-[19px]">Adicionar novo jogo</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;