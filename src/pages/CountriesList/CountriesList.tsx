import React, { useState, useEffect } from "react";
import {
  getAllCountries,
  getCountriesByRegion,
} from "../../services/countriesService";
import { CardList, CardListToolsBar, Card } from "../../components";
import { Country } from "../../models";
import loading from "../../assets/img/loading.gif";
import styles from "./countriesList.module.scss";

function CountriesList({ darkMode }: { darkMode: boolean }) {
  const [countriesData, setCountriesData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const countries = await getAllCountries();
        setCountriesData(countries.map((country: any) => Country.fromJson(country)));
        setCountries(countries.map((country: any) => Country.fromJson(country)));
        setIsLoading(false);
      } catch (error: any) {
        setError(error?.response?.data?.message);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleOnSearchFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const filteredCountries = countriesData.filter((country: { name: string }) =>
      country.name.toLowerCase().includes(e.target.value)
    );
    setCountries(filteredCountries);
  };

  const handleOnRegionFilter = async (region: { value: string }) => {
    const countries = await getCountriesByRegion(region?.value);
    setCountriesData(countries.map((country: any) => Country.fromJson(country)));
    setCountries(countries.map((country: any) => Country.fromJson(country)));
  };

  if (error) {
    return <div className={styles.errorMessage}>{error}</div>;
  }

  return (
    <>
      <div
        className={`${styles.countriesListContainer} ${darkMode && styles.darkModeTheme
          }`}
      >
        <CardListToolsBar
          handleSearchFilter={handleOnSearchFilter}
          handleSelectFilter={handleOnRegionFilter}
          darkMode={darkMode}
        />
        {isLoading ? (
          <img className={styles.loadingGif} src={loading} alt="loadingGif" />
        ) : (
          <CardList>
            {countries.map((country: Country) => (
              <Card
                key={country?.name}
                img={country?.flag}
                title={country?.name}
                descriptionItems={country.getDescriptionAttributes()}
                darkMode={darkMode}
              />
            ))}
          </CardList>
        )}
      </div>
    </>
  );
}

export default CountriesList;
