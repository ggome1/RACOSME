import { createContext, useEffect, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import "./global.css";
import Review from "./components/review";
export const ReadMeContext = createContext({});
function App() {

  const [tab, setTab] = useState("main");
  const value = { tab, setTab };
  return (
    <div className="flex flex-col h-screen w-full overflow-x-auto">
      <ReadMeContext.Provider value={value}>
        <Header />
        {tab === "main" ? <Main /> : <Review />}
        <Footer />
      </ReadMeContext.Provider>
    </div>
  );
}

export default App;
