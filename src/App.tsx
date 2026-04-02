import { useEffect } from "react";
import ReactGA from "react-ga4";
import MainPage from "./pages/mainPage";

function App() {
  const env = import.meta.env.MODE;

  // Google Analytics
  useEffect(() => {
    if (env === "production") {
      ReactGA.initialize("G-RRBHLDHG96", {
        gaOptions: {},
        gtagOptions: {},
        testMode: false,
      });
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    } else if (env === "test") {
      console.log("Google Analytics not initialized — Test Build Mode");
    } else {
      console.log("Google Analytics not initialized — Development Mode");
    }
  }, [env]);

  return (
    <div className="flex h-screen w-screen flex-col">
      <MainPage />
    </div>
  );
}

export default App;
