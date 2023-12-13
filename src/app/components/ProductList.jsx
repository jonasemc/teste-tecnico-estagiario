import styles from "./ProductList.module.css";

export function ProductList({ products }) {
  return (
    <div className={styles.productsContainer}>
      <h2>Lista de produtos</h2>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div className={styles.productCard} key={product.id}>
            <div className={styles.productImg}>Product</div>
            <h3 className={styles.productName}>{product.name}</h3>
            <p>R$ {product.price}</p>
            <button className={styles.button}>Adicionar ao carrinho</button>
          </div>
        ))}
      </div>
    </div>
  );
}
