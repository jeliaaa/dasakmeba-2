import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MenuOfNav from "./components/navbar/MenuOfNav";
import MainPage from "./pages/mainPage/MainPage";
import BaseInfo from "./pages/About/agency/baseInfo/BaseInfo";
import Grants from "./pages/ourServices/services/grants/Grants";
import Footer from "./components/footer/Footer";
import { useTranslation } from "react-i18next";
import Structure from "./pages/About/agency/structure/Structure";
import WorkerSingle from "./pages/About/agency/structure/WorkerSingle";

function App() {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  let fontPrimary = "--font-primary-ge"; // Default font
  if (selectedLanguage === "en") {
    fontPrimary = "--font-primary-en";
  }

  return (
    <div style={{ fontFamily: `${fontPrimary}, sans-serif` }}>
      <MenuOfNav />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          backgroundColor: "#ebedff",
        }}
      >
        <div className="app_wrapper">
          <Routes>
            <Route index path="/dasakmeba-1" element={<MainPage />} />
            <Route path="/about/agency/baseInfo" element={<BaseInfo />} />
            <Route path="/about/agency/structure" element={<Structure />} />
            <Route path="/ourServices/services/grants" element={<Grants />} />
            <Route
              path="//about/agency/structure/worker/:id"
              element={<WorkerSingle />}
            />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
