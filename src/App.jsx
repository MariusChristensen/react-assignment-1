import { meny } from "./data";
import Menu from "./components/Menu";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <h1>Meny</h1>
      <Menu dishes={meny} />
    </div>
  );
}

export default App;
