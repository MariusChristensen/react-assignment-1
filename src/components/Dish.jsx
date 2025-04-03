import styles from "./Dish.module.css";

function Dish({ dish }) {
  const { tittel, pris, ingredienser, kategori } = dish;
  return (
    <div className={styles.card}>
      <h2>{tittel}</h2>
      <p>
        <strong>Pris:</strong> {pris}
      </p>
      <p>
        <strong>Ingredienser:</strong> {ingredienser}
      </p>
      <p className={styles.category}>{kategori}</p>
    </div>
  );
}

export default Dish;
