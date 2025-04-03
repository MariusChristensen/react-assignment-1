import Dish from "./Dish";
import styles from "./Menu.module.css";

function Menu({ dishes }) {
  return (
    <div className={styles.grid}>
      {dishes.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  );
}

export default Menu;
