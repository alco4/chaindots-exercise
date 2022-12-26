import { formatNumber } from "../utils/utils";

interface CountryType {
  getDescriptionAttributes: () => { key: string; value: any; }[];
}

class Country implements CountryType {
  name: string;
  flag: string;
  population: string;
  region: string;
  capital: string;

  constructor(name: string, flag: string, population: string, region: string, capital: string) {
    this.name = name;
    this.flag = flag;
    this.population = population;
    this.region = region;
    this.capital = capital;
  }

  getDescriptionAttributes = () => {
    return [
      {
        key: "population",
        value: this.population,
      },
      {
        key: "region",
        value: this.region,
      },
      {
        key: "capital",
        value: this.capital,
      },
    ];
  };

  static fromJson({ name, flags, population, region, capital }: { name: { common: string }, flags: { svg: string }, population: string, region: string, capital: any[] }) {
    return new Country(
      name?.common,
      flags?.svg,
      formatNumber(population),
      region,
      Array.isArray(capital) && capital[0]
    );
  }
}

export default Country;
