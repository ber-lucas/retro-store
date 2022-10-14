import Header from "../components/Header";
import Body from "../components/Store/Body";
import Menu from "../components/Store/Menu";

const Store = () => {
  return (
    <div className="max-w-[1360px] mx-auto flex flex-col items-center my-20">
      <Header />
      <Menu />
      <Body />
    </div>
  );
};

export default Store;
