import styles from "./cardList.module.scss";
const CardList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles.cardList}>{children}</div>;
};
export default CardList;
