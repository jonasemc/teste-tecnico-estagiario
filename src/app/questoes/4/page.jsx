import { ProductList } from "@/app/components/ProductList";

const produtos = [
  {
    id: 1,
    name: "Camiseta T-shirt",
    price: 10.99,
  },
  {
    id: 2,
    name: "Calça Jogger",
    price: 59.99,
  },
  {
    id: 3,
    name: "Saia Midi",
    price: 69.99,
  },
  {
    id: 4,
    name: "Camiseta Polo",
    price: 24.99,
  },
  {
    id: 5,
    name: "Calça Jeans",
    price: 79.99,
  },
  {
    id: 6,
    name: "Saia Plissada",
    price: 79.99,
  },
];

export default function Questao4() {
  return (
    <>
      <h1>Questão 4</h1>
      <p>
        Crie um componente chamado `ProductList` que recebe uma matriz de
        objetos de produto e renderiza uma lista de produtos. Cada produto deve
        exibir seu nome e preço.
      </p>
      <ProductList products={produtos} />
    </>
  );
}
