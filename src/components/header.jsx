import React, { useContext } from "react";
import { ReadMeContext } from "../App";

const Header = () => {
  const { setTab } = useContext(ReadMeContext);
  return (
    <div className="absolute bg-white max-h-[10rem]  min-w-full flex flex-col py-[1.5rem] rounded-b-2xl shadow-lg whitespace-nowrap overflow-visible">
      <div className="flex justify-center items-center gap-20 h-full px-8">
        <div className="absolute left-[2rem]">
          <img className="max-w-[9rem]" src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Banner" />
        </div>
        <div className="flex gap-[2rem] font-body text-[1.1rem]">
          <div className="cursor-pointer" onClick={() => setTab('main')}>Main</div>
          <div className="cursor-pointer" onClick={() => setTab('review')}>Review</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
