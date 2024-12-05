import React, { useContext } from "react";
import { ReadMeContext } from "../App";

const Header = () => {
  const { setTab } = useContext(ReadMeContext);
  return (
    <div className="absolute bg-white max-h-[10rem]  min-w-full flex flex-col py-[0.5rem] rounded-b-2xl shadow-lg whitespace-nowrap overflow-visible">
      <div className="flex justify-center items-center px-[3rem]">
        <div className="w-full flex justify-between items-center">
          <img onClick={() => setTab('main')} className="cursor-pointer max-w-[8rem]" src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Banner" />
          <div className="cursor-pointer text-[1rem] font-label" onClick={() => setTab('review')}>체험단 리뷰</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
