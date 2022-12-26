import moonIcon from "../../assets/img/moon.svg";
import sunIcon from "../../assets/img/sun.png";
import styles from "./countriesHeader.module.scss";
const CountriesHeader = ({ handleToggleDarkMode, darkMode }: { handleToggleDarkMode: () => void, darkMode: boolean }) => {
  return (
    <div
      className={`${styles.countriesHeader} ${darkMode && styles.darkModeTheme
        }`}
    >
      <h1 className={styles.countriesPageTitle}>Where in the World?</h1>
      <div className={styles.darkMode} onClick={handleToggleDarkMode}>
        {darkMode ? (
          <>
            <img className={styles.darkModeIcon} src={sunIcon} alt="sunIcon" />
            <span>Light Mode</span>
          </>
        ) : (
          <>
            <img
              className={styles.darkModeIcon}
              src={moonIcon}
              alt="moonIcon"
            />
            <span>Dark Mode</span>
          </>
        )}
      </div>
    </div>
  );
};
export default CountriesHeader;
