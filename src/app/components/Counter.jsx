import styles from "./Counter.module.css";
import { useState, useEffect } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCounter(10);
  }, []);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className={styles.counterBox}>
      <button className={styles.counterButton} onClick={decrement}>
        -
      </button>
      <div className={styles.counter}>{counter}</div>
      <button className={styles.counterButton} onClick={increment}>
        +
      </button>
    </div>
  );
}
