import React from "react";
import Body from "./Body";
import Header from "./Header";

const Store = () => {
  return (
    <div className="max-w-[1360px] mx-auto flex flex-col items-center my-20">
      <div className="flex justify-between items-center self-stretch mb-[50px]">
        <img src="/logo-com-degrade.png" alt="" />
        <button className="bg-red-500 rounded-md flex justify-center items-center w-16 h-9">
          <strong className="text-1xl text-white font-black block">
            \/
          </strong>
        </button>
      </div>
      <Header />
      <Body />
    </div>
  );
};

export default Store;
