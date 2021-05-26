// HTML elements
export class TodoTemplate {
  static renderView(todoList) {
    return /*html*/ `
      <h1>Todo</h1>

      <input type="text">
      <button id="add-todo">Adicionar</button>

      <ul>
        ${todoList
          .map(
            (todoItem) =>
              /*html*/ `<li id="${todoItem.id}">${todoItem.text} <button data-delete-todo>Deletar</button></li>`
          )
          .join("")}
      </ul>
    `;
  }
}
