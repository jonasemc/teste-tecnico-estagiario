import styles from "./SumPairComponent.module.css";

export function SumPairComponent() {
  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <h2>Soma de números pares</h2>
        <div className={styles.informationBox}>
          <h3>Matriz de números inteiros </h3>
          <p>1, 2, 3, 4, 5, 6, 7, 8, 9, 10</p>
        </div>
        <div className={styles.informationBox}>
          <h3>Números pares</h3>
          <p>2, 4, 6, 8, 10</p>
        </div>
        <div className={styles.informationBox}>
          <h3>Resultado da soma</h3>
          <p>30</p>
        </div>
      </div>
    </div>
  );
}
