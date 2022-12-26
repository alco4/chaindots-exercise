import { Link } from "react-router-dom";
import styles from "./card.module.scss";

interface CardType {
  img: string;
  title: string;
  descriptionItems: { key: string, value: string }[];
  darkMode: boolean
}
const Card: React.FC<CardType> = ({ img, title, descriptionItems, darkMode }) => {
  return (
    <Link
      to={`/country/${title}`}
      style={{ textDecoration: "none !important", color: "black" }}
    >
      <div className={`${styles.card} ${darkMode && styles.darkModeTheme}`}>
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
