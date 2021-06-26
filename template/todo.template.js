import { TodoItemModel } from "../models/todo-item.model.js";

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

      <div class="row">
        <div class="col s4">
          <input type="text">
        </div>
        <div class="col s4">
          <button id="add-todo" class="waves-effect waves-light btn">Adicionar</button>
        </div>
      </div>


      <ul class="collection">
        ${todoList
          .map(
            (todoItem) => /*html*/ `
              <li class="collection-item"> 
                <span data-toggle-todo="${todoItem.id}">${todoItem.text}</span> 
                <button class="waves-effect waves-light btn" data-delete-todo="${todoItem.id}">Deletar</button>
              </li>`
          )
          .join("")}
      </ul>
    `;
  }
}
