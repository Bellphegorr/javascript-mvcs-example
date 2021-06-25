import { TodoItemModel } from "../models/todo-item.model";

/**
 * @class Template of todo view
 */
export class TodoTemplate {
  /**
   *
   * @param {Array<TodoItemModel>} todoList
   *
   * @returns A HTML string with template of todo view (complete)
   */
  static renderView(todoList) {
    return /*html*/ `
      <h1>Todo</h1>

      <input type="text">
      <button id="add-todo">Adicionar</button>

      <ul>
        ${todoList
          .map(
            (todoItem) => /*html*/ `
              <li> 
                <span data-toggle-todo="${todoItem.id}">${todoItem.text}</span> 
                <button data-delete-todo="${todoItem.id}">Deletar</button>
              </li>`
          )
          .join("")}
      </ul>
    `;
  }
}
