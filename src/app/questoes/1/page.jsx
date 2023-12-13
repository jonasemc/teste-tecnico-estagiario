/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "@/app/components/Button";

export default function Questao1() {
  function handleClickButton() {
    alert("O botão foi clicado");
  }
  return (
    <>
      <h1>Questão 1</h1>
      <p>
        Crie um botão vermelho com as bordas arredondadas que exiba "Clique-me!"
        como texto. Ao clicar no botão, um alerta deve ser disparado avisando
        que o botão foi clicado.
      </p>
      <Button content="Clique-me!" action={handleClickButton} />
    </>
  );
}
