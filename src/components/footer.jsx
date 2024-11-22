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
    <div className="flex-grow flex flex-col sm:text-base text-[8px] bg-[#2d302d]">
      <div className="h-full mt-1 whitespace-nowrap justify-center flex flex-col gap-2 lg:gap-4 px-8 lg:py-6 py-3">
        <div className="flex w-full justify-between">
          <div className="font-neue text-[10px] sm:text-[15px] lg:text-[20px] text-neutral-10">
            HCell Global
          </div>
          <div className="flex text-neutral-0 items-center gap-6">
            <div className="text-neutral-40">HCell Global SNS</div>
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
        {/* <div className="flex gap-2 font-label text-neutral-80">
            <div className="cursor-pointer">이용약관</div>
            <div className="border-l"></div>
            <div className="cursor-pointer">개인정보 처리방침</div>
            <div className="border-l"></div>
            <div className="cursor-pointer">가맹점 및 입점 문의</div>
            <div className="border-l"></div>
            <div className="cursor-pointer">제휴 홍보 마케팅 문의</div>
            <div className="border-l"></div>
            <div className="cursor-pointer">본사정품판매처</div>
            <div className="border-l"></div>
            <div className="cursor-pointer">채용안내</div>
        </div> */}
        <div className="lg:text-[14px] sm:text-[12px] text-[7px] flex justify-between lg:gap-20 font-label text-neutral-30">
          <div className="flex lg:gap-20 gap-10">
            <div className="flex flex-col gap-1 sm:gap-2">
              <div>회사명</div>
              <div>대표이사</div>
              <div>사업자등록번호</div>
              {/* <div>통신판매업 신고번호</div> */}
              {/* <div>개인정보관리책임자</div> */}
            </div>
            <div className="flex flex-col gap-1 sm:gap-2">
              <div>에이치셀글로벌</div>
              <div>박상현</div>
              <div>298-86-02424</div>
              {/* <div>00 0000</div> */}
              {/* <div>박상현 shpark3965@naver.com</div> */}
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
