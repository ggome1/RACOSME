import { createContext, useEffect, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import "./global.css";
import Review from "./components/review";
export const ReadMeContext = createContext({});
function App() {

  const [tab, setTab] = useState("main");
  const [analyticsReady, setAnalyticsReady] = useState(false);
  const value = { tab, setTab };

  useEffect(() => {
    // Analytics 초기화 확인
    const initAnalytics = async () => {
      const { analytics } = await import("./firebase/firebase_config");

      // 초기화된 analytics 객체 확인
      console.log("Analytics object:", analytics);

      if (analytics && typeof analytics.logEvent === "function") {
        console.log("Analytics initialized successfully");
        setAnalyticsReady(true);
      } else {
        console.warn("Analytics not initialized or logEvent is not a function");
      }
    };

    initAnalytics();
  }, []);

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
