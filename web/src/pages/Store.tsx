import Header from "../components/Header";
import Body from "../components/Body";
import Menu from "../components/StoreMenu";

const Store = () => {
  return (
    <div className="max-w-[1360px] mx-auto flex flex-col items-center gap-16 py-8">
      <Header /> 

      <div>
        <Menu />

        <div className="bg-zinc-400/20 mt-5 px-[80px] rounded-lg">
          <Body />
        </div>       
      </div>
    </div>
  );
};

export default Store;
