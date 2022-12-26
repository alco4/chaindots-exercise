import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CountriesList, CountryDetail } from "./pages";
import { CountriesHeader } from "./components";
import styles from "./app.module.scss";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleToggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <div
      className={`${styles.mainContainer} ${darkMode && styles.darkModeTheme}`}
    >
      <CountriesHeader
        handleToggleDarkMode={handleToggleDarkMode}
        darkMode={darkMode}
      />
      <Routes>
        <Route path="/*" element={<CountriesList darkMode={darkMode} />} />
        <Route
          path="/country/:countryName"
          element={<CountryDetail />}
        />
      </Routes>
    </div>
  );
}

export default App;
