import { useContext } from 'react'
import { Link } from "react-router-dom";
import { DarkModeContext } from '../../context/DarkModeProvider';
import { encodeURI } from "../../utils/utils";
import styles from "./card.module.scss";

interface CardType {
  img: string;
  title: string;
  descriptionItems: { key: string, value: string }[];
}
const Card: React.FC<CardType> = ({ img, title, descriptionItems }) => {
  const { isDarkMode } = useContext(DarkModeContext)

  return (
    <Link
      to={`/country/${encodeURI(title)}`}
      style={{ textDecoration: "none !important", color: "black" }}
    >
      <div className={`${styles.card} ${isDarkMode && styles.darkModeTheme}`}>
        <img className={styles.cardImage} src={img} alt={`${title}`} />
        <div className={styles.cardTitle}>{title}</div>
        {descriptionItems.map((item) => (
          <div key={item.key} className={styles.cardItem}>
            <div className={styles.cardItemLabel}>{item.key}:</div>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
    </Link>
  );
};
export default Card;
