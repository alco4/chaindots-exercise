import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getCountryByName } from "../../services/countriesService";
import { Country } from "../../models";
import backIcon from "../../assets/img/back.png";
import loading from "../../assets/img/loading.gif";
import styles from "./countryDetail.module.scss";

function CountryDetail() {
  const [country, setCountry] = useState<Country | null>(null);
  const [countryDetailData, setCountryDetailData] = useState<any[]>([]);
  const { countryName } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const [countryData] = await getCountryByName(countryName);
        setCountry(Country.fromJson(countryData));
      } catch (error: any) {
        setError(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [countryName]);

  useEffect(() => {
    country?.getDescriptionAttributes &&
      setCountryDetailData(country?.getDescriptionAttributes());
  }, [country]);

  if (error) {
    return (
      <div className={styles.errorMessage}>
        {error}
        <Link to="/">
          <button className={styles.backButton}>
            <img className={styles.backIcon} src={backIcon} alt="backIcon" />
            Back
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.cardDetail}>
      {isLoading ? (
        <img className={styles.loadingGif} src={loading} alt="loadingGif" />
      ) : (
        <>
          <div>
            <div className={styles.backButtonContainer}>
              <Link to="/">
                <button className={styles.backButton}>
                  <img
                    className={styles.backIcon}
                    src={backIcon}
                    alt="backIcon"
                  />
                  Back
                </button>
              </Link>
            </div>
            <img
              className={styles.cardDetailImage}
              src={country?.flag}
              alt={`${country?.name}`}
            />
          </div>
          <div className={styles.cardDetailInfo}>
            <h2 className={styles.cardTitle}>{country?.name}</h2>
            <div>
              {countryDetailData?.map((item) => (
                <div key={item.key} className={styles.cardItem}>
                  <div className={styles.cardItemLabel}>{item.key}:</div>
                  <div>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CountryDetail;
