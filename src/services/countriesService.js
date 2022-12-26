import axios from "axios";

const API_URL = "https://restcountries.com/v3.1";

const getAllCountries = async () => {
  const resp = await axios.get(
    `${API_URL}/all?fields=name,population,region,capital,flags`
  );
  return resp?.data;
};

const getCountriesByRegion = async (region) => {
  const resp = await axios.get(
    `${API_URL}/region/${region}?fields=name,population,region,capital,flags`
  );
  return resp?.data;
};

const getCountryByName = async (countryName) => {
  const resp = await axios.get(
    `${API_URL}/name/${countryName}?fields=name,population,region,capital,flags`
  );
  return resp?.data;
};

export { getAllCountries, getCountriesByRegion, getCountryByName };
