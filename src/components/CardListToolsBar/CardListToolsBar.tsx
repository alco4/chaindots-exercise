import { useContext } from 'react';
import Select from "react-select";
import { DarkModeContext } from '../../context/DarkModeProvider';
import search from "../../assets/img/search.png";
import styles from "./cardListToolsBar.module.scss";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "Americas", label: "Americas" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

interface CardListToolsBarType {
  handleSearchFilter: any;
  handleSelectFilter: any;
}
const CardListToolsBar: React.FC<CardListToolsBarType> = ({
  handleSearchFilter,
  handleSelectFilter,
}) => {
  const { isDarkMode } = useContext(DarkModeContext)

  const dropdownCustomStyle = {
    control: (base: any, state: any) => ({
      ...base,
      backgroundColor: isDarkMode ? "#2B3945" : "#FFFFFF",
      color: "#FFFFFF !important",
      border: state.isFocused ? 0 : 0,
      borderRadius: "3px",
      padding: "4px",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      "&:hover": {
        border: state.isFocused ? 0 : 0,
      },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      background: isDarkMode ? "#2B3945" : "#FFFFFF",
      color: isDarkMode ? "#FFFFFF" : "#2B3945",
      border: state.isSelected ? "1px solid lightBlue" : "none",
      "&:hover": {
        backgroundColor: state.isSelected ? "lightBlue" : "rgb(222, 235, 255)",
      },
    }),
  };

  return (
    <div
      className={`${styles.cardListToolsBar} ${isDarkMode && styles.darkModeTheme
        }`}
    >
      <div className={styles.searchBox}>
        <img className={styles.searchIcon} src={search} alt="" />
        <input
          className={styles.searchInput}
          type="text"
          onChange={handleSearchFilter}
          placeholder="Search for a country..."
        />
      </div>
      <div className={styles.selectBox}>
        <Select
          styles={dropdownCustomStyle}
          className={styles.selectInput}
          options={options}
          placeholder="Filter by region"
          onChange={handleSelectFilter}
          theme={(theme: any) => ({
            ...theme,
            borderRadius: "3px",
            colors: {
              ...theme.colors,
              neutral80: isDarkMode ? "#FFFFFF" : "black",
            },
          })}
        />
      </div>
    </div>
  );
};
export default CardListToolsBar;
