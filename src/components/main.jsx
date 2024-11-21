import { useState, useEffect } from "react";

function Main() {
  const [style, setStyle] = useState({
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/final_long.jpg)`,
    backgroundRepeat: "no-repeat",
    overflow: "auto",
    backgroundPosition: "center",
    backgroundSize: "cover", // 기본 값
  });

  useEffect(() => {
    const updateStyle = () => {
      if (window.innerWidth <= 468) {
        setStyle({
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/final_4.jpg)`,
          backgroundRepeat: "repeat",
          overflow: "auto",
          backgroundPosition: "center",
          backgroundSize: "contain", // 기본 설정
        });
      } else {
        setStyle({
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/final_3.jpg)`,
          backgroundRepeat: "no-repeat",
          overflow: "auto",
          backgroundPosition: "center",
          backgroundSize: "cover", // 작은 화면에서는 contain
        });
      }
    };

    // 초기 스타일 설정
    updateStyle();

    // 창 크기 변경 감지
    window.addEventListener("resize", updateStyle);

    return () => {
      window.removeEventListener("resize", updateStyle);
    };
  }, []);

  return (
    <div
      className="flex flex-col xs:min-h-[1020px] h-full justify-center items-center px-8 gap-4"
      style={style}
    ></div>
  );
}

export default Main;