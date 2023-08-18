import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import MenuOfNav from "./components/navbar/MenuOfNav";
import MainPage from "./pages/mainPage/MainPage";
import BaseInfo from "./pages/about/baseInfo/BaseInfo";
import Grants from "./pages/ourServices/grants/Grants";
import Footer from "./components/footer/Footer";
import { useTranslation } from "react-i18next";
import Structure from "./pages/structure/Structure";
import WorkerSingle from "./pages/structure/WorkerSingle";
import Videos from "./ReusableComponents/vids/Videos";
import { useEffect, useState } from "react";
import Stats from "./ReusableComponents/stats/Stats";
import About from "./pages/about/About";

function App() {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  let fontPrimary = "--font-primary-ge"; // Default font
  if (selectedLanguage === "en") {
    fontPrimary = "--font-primary-en";
  }
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  useEffect(() => {
    console.log(location.search);
    if (location.pathname === "/main") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [location]);

  return (
    <div style={{ fontFamily: `${fontPrimary}, sans-serif`, display:'flex', alignItems: 'center', flexDirection:'column' }}>
      <MenuOfNav />
      <div className="site_container">
        <div className="app_wrapper">
          <Routes>
            <Route index path="/main" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/baseInfo" element={<BaseInfo />} />
            <Route path="/about/agency/structure" element={<Structure />} />
            <Route path="/ourServices/services/grants" element={<Grants />} />
            <Route
              path="//about/agency/structure/worker/:id"
              element={<WorkerSingle />}
            />
          </Routes>
        </div>
        <div className="videos_wrapper">
          {isOpen && (
            <>
              <Videos /> <Stats />
            </>
          )}
        </div>
        <>
        </>
      </div>

      <Footer />
    </div>
  );
}

export default App;
