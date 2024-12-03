import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const handleInstagramClick = () => {
    window.open(
      "https://www.instagram.com/hcell_official?igsh=MWJkdnVkd2V5czlmbw==",
      "_blank"
    );
  };
  return (
    <div className="flex flex-col sm:px-[10rem] bg-[#2d302d]">
      <div className="h-full mt-1 whitespace-nowrap justify-center flex flex-col gap-[1rem] px-[1rem] py-[1rem]">
        <div className="flex w-full text-[1rem] justify-between">
          <div className="font-neue text-neutral-10">
            HCell Global
          </div>
          <div className="text-[1rem] flex text-neutral-0 items-center gap-6">
            <div className="text-neutral-40 font-neue">HCell Global SNS</div>
            <div className="flex gap-2">
              <FaInstagram
                onClick={handleInstagramClick}
                color="white"
                style={{ cursor: "pointer" }}
              />
              <FaYoutube
                onClick={handleInstagramClick}
                color="white"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
        <div className="text-[0.7rem] flex lg:gap-20 font-label text-neutral-30">
          <div className="flex lg:gap-15 gap-5">
            <div className="flex flex-col gap-1 sm:gap-2">
              <div>회사명</div>
              <div>대표이사</div>
              <div>사업자등록번호</div>
            </div>
            <div className="flex flex-col gap-1 sm:gap-2">
              <div>에이치셀글로벌</div>
              <div>박상현</div>
              <div>298-86-02424</div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>경기도 하남시 신우실로 110번길 31 네모빌딩 5층(감이동)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
