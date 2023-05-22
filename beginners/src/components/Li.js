import styles from "../routes/Character.module.css";

const Li = ({ items, title }) => {
  return (
    <div className={styles.items}>
      <h2>{title}</h2>
      <ul className={styles.ul}>
        {items.map((comic, idx) => (
          <li key={idx}>{comic.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Li;
