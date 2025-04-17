const inputItem = document.querySelector("#item");
const btnInsertItem = document.querySelector("#insertItem");

// acao de click no button de btnInsertItem (adicionar item)
btnInsertItem.addEventListener("click", (event) => {
  event.preventDefault();

  // verifica se o input foi preenchido para então executar a função newItem(item)
  if (inputItem.value.trim().length > 0) {
    // funcao newItem com o valor do input.value
    newItem(inputItem.value);

    // resetando valor do inputItem.value
    inputItem.value = "";
  }
});

//  ---- função para criar novo item
function newItem(item) {
  const ul = document.querySelector("ul");

  // criando elementos de um novo item
  const li = document.createElement("li");
  const input = document.createElement("input");
  const span = document.createElement("span");
  const button = document.createElement("button");
  const img = document.createElement("img");

  //  settando atributo ao valor ao elemento img criado
  input.setAttribute("type", "checkbox");

  //  atribuindo valor ao elemento  span criado
  span.textContent = item;

  //  settando atributo ao valor ao elemento img criado
  img.setAttribute("src", "./assets/icons/delete.svg");

  //  inserindo o elemento img criado no elemento button
  button.append(img);

  // inserindo os elementos criados input, span e button como um novo li
  li.append(input, span, button);

  //   ----------

  // ----  função para deletar o item
  button.addEventListener("click", () => {
    // verifica se o button ja tem a classe close
    // se tiver remove o li ao clicar se nao adiciona a classe e os elementos de informacao de que foi removido
    if (button.classList.contains("close")) {
      li.remove();
    } else {
      // removendo li
      input.remove();

      // adicionando classe no li e no button
      li.classList.add("delete");
      button.classList.add("close");

      // criando nova imagem e settando atributo src e adiciona no inicio do li
      const imgWarning = document.createElement("img");
      imgWarning.setAttribute("src", "./assets/icons/warning.svg");

      li.prepend(imgWarning);

      // alterando conteudo do span
      span.textContent = "O item foi removido da lista";

      // alterando imagem
      img.setAttribute("src", "./assets/icons/close.svg");
    }
  });

  // retornado li novo no final de ul
  return ul.append(li);
}
