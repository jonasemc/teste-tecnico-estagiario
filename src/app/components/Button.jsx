import styles from "./Button.module.css";

export function Button({ content, action }) {
  return (
    <button className={styles.button} onClick={action}>
      {content}
    </button>
  );
}
