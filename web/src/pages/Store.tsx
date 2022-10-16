import Header from "../components/Header";
import Body from "../components/Store/Body";
import Menu from "../components/Store/Menu";

const Store = () => {
  return (
    <div className="max-w-[1360px] mx-auto flex flex-col items-center gap-16 py-8">
      <Header /> 

      <img src="Logo.svg" alt="Logo Retro Store" />

      <div>
        <Menu />
        <Body />
      </div>
    </div>
  );
};

export default Store;
