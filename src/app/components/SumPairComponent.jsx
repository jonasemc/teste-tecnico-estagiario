import styles from "./SumPairComponent.module.css";

export function SumPairComponent({ numbers, pairNumbers, sumNumbers }) {
  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <h2>Soma de números pares</h2>
        <div className={styles.informationBox}>
          <h3>Matriz de números inteiros </h3>
          <p>{numbers}</p>
        </div>
        <div className={styles.informationBox}>
          <h3>Números pares</h3>
          <p>{pairNumbers}</p>
        </div>
        <div className={styles.informationBox}>
          <h3>Resultado da soma</h3>
          <p>{sumNumbers}</p>
        </div>
      </div>
    </div>
  );
}
