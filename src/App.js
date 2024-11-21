import { createContext, useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import "./global.css";

export const ReadMeContext = createContext({});

function App() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // 0ms 지연
  }, []);
  return (
    <div className="flex flex-col h-screen w-full overflow-x-auto">
      <ReadMeContext.Provider>
        <Header />
          <Main />
        <Footer />
      </ReadMeContext.Provider>
    </div>
  );
}

export default App;
