import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import MenuOfNav from "./components/navbar/MenuOfNav";
import MainPage from "./pages/mainPage/MainPage";
import BaseInfo from "./pages/about/baseInfo/BaseInfo";
import Footer from "./components/footer/Footer";
import { useTranslation } from "react-i18next";
import Videos from "./ReusableComponents/vids/Videos";
import { useEffect, useState } from "react";
import Stats from "./ReusableComponents/stats/Stats";
import About from "./pages/about/About";
import Brand from "./pages/about/brand/Brand";
import Partners from "./pages/about/partners/Partners";
import Structure from "./pages/about/structure/Structure";
import Statistics from "./pages/about/statistics/Statistics";
import Services from "./pages/services/Services";
import OurServices from "./pages/services/ourServices/OurServices";
import Migration from "./pages/services/migration/Migration";
import Grants from "./pages/services/grants/Grants";
import Projects from "./pages/services/projects/Projects";
import Blog from "./pages/blog/Blog";
import Researches from "./pages/blog/researches/Researches";
import Articles from './pages/blog/articles/Articles'
import Calendar from './pages/blog/calendar/Calendar'
import Classification from './pages/blog/profClassification/Classification'
import Profesiograma from './pages/blog/profesiograma/Profesiograma'
import VideoLessons from './pages/blog/videoLessons/VideoLessons'

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
    <div
      style={{
        fontFamily: `${fontPrimary}, sans-serif`,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <MenuOfNav />
      <div className="site_container">
        <div className="app_wrapper">
          <Routes>
            <Route index path="/main" element={<MainPage />} />
            {/* about */}
            <Route path="/about" element={<About />} />
            <Route path="/about/baseInfo" element={<BaseInfo />} />
            <Route path="/about/brand" element={<Brand />} />
            <Route path="/about/partners" element={<Partners />} />
            <Route path="/about/structure" element={<Structure />} />
            <Route path="/about/statistics" element={<Statistics />} />
            {/* services */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/ourServices" element={<OurServices />} />
            <Route path="/services/grants" element={<Grants />} />
            <Route path="/services/projects" element={<Projects />} />
            <Route path="/services/migration" element={<Migration />} />
            {/* blog */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/articles" element={<Articles />} />
            <Route path="/blog/calendar" element={<Calendar />} />
            <Route path="/blog/classification" element={<Classification />} />
            <Route path="/blog/profesiograma" element={<Profesiograma />} />
            <Route path="/blog/researches" element={<Researches/>} />
            <Route path="/blog/vid-lessons" element={<VideoLessons />} />
          </Routes>
        </div>
        <div className="videos_wrapper">
          {isOpen && (
            <>
              <Videos /> <Stats />
            </>
          )}
        </div>
        <></>
      </div>

      <Footer />
    </div>
  );
}

export default App;
