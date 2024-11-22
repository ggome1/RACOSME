import React from "react";

const Header = () => {
  return (
    <div className="absolute bg-white max-h-[90px] h-[11%]  min-w-full flex flex-col py-4 rounded-b-2xl shadow-lg whitespace-nowrap overflow-visible">
      <div className="flex justify-center items-center gap-20 h-full px-8">
        <img className="max-w-[150px]" src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Banner" />
        <div className="gap-8 font-title text-[18px] md:flex hidden">
          <div className="cursor-pointer">카테고리</div>
          <div className="cursor-pointer">베스트</div>
          <div className="cursor-pointer">신상품</div>
          <div className="cursor-pointer">기획전</div>
          <div className="cursor-pointer">리뷰</div>
          <div className="cursor-pointer">멤버십</div>
          <div className="cursor-pointer">브랜드</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
