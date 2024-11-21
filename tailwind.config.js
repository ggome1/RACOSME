module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1800px",
        xs: "480px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderWidth: {
        2.5: "2.5px",
      },
      backgroundColor: ["active"],
      colors: {
        "neutral-0": "#FFFFFF",
        "neutral-10": "#F4F6F9",
        "neutral-20": "#D0D3D8",
        "neutral-30": "#B8BCC1",
        "neutral-40": "#989BA0",
        "neutral-50": "#7C7F83",
        "neutral-60": "#55595C",
        "neutral-70": "#3A3D40",
        "neutral-80": "#282B30",
        "neutral-90": "#1C1E22",
        "neutral-100": "#0C0C0C",

        "yell": "#ffb649",

        "primary-10": "#F2FCFC",
        "primary-20": "#D7F7F7",
        "primary-30": "#ACEFEE",
        "primary-40": "#8BE9E9",
        "primary-50": "#65E3E3",
        "primary-60": "#48CBCC",
        "primary-70": "#009D9E",
        "primary-80": "#166868",
        "primary-90": "#304343",
        "primary-100": "#232E2E",

        "error-10": "#FF8777",
        "error-20": "#F65742",
      },
      fontFamily: {
        title: ["pretendard-bold"],
        label: ["pretendard-regular"],
        body: ["pretendard-thin"],
        sba: ["SBAggroB"],
        iam: ["IAMAPLAYER"],
        neue: ["Bebas Neue"],
        bask: ["Baskervville"],
        suit: ["SUIT-Regular"],
      },
    },
  },
  plugins: [],
};
