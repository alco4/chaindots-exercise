import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { DarkModeContext } from './context/DarkModeProvider'
import { CountriesList, CountryDetail } from "./pages";
import { CountriesHeader } from "./components";
import styles from "./app.module.scss";

function App() {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext)

  const handleToggleDarkMode = () => setIsDarkMode(!isDarkMode);
  return (
    <div
      className={`${styles.mainContainer} ${isDarkMode && styles.darkModeTheme}`}
    >
      <CountriesHeader
        handleToggleDarkMode={handleToggleDarkMode}
      />
      <Routes>
        <Route path="/*" element={<CountriesList />} />
        <Route
          path="/country/:countryName"
          element={<CountryDetail />}
        />
      </Routes>
    </div>
  );
}

export default App;
