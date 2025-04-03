import Dish from "./Dish";
import styles from "./Menu.module.css";

function Menu({ dishes }) {
  const categories = ["Forrett", "Hovedrett", "Dessert"];

  return (
    <div>
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div className={styles.grid}>
            {dishes
              .filter((dish) => dish.kategori === category)
              .map((dish) => (
                <Dish key={dish.id} dish={dish} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
