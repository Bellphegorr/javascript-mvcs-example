import { TodoItemModel } from "../models/todo-item.model.js";
import { TodoTemplate } from "../template/todo.template.js";

/**
 * View modification (class to modifier and view control)
 * 
 * @class 
 */
export class TodoView {
  /** @param {TodoTemplate} todoTemplate */
  constructor(TodoTemplate) {
    /** @type {TodoTemplate} */
    this.TodoTemplate = TodoTemplate;

    /** @type {HTMLElement} root element of page */
    this.rootElement = document.querySelector("#root");
  }

  /**
   * Render a list of todo on the view
   * 
   * @method render
   *
   * @param {Array<TodoItemModel>} todoList Todo list that will be rendered
   */
  render(todoList) {
    let template = this.TodoTemplate.renderView(todoList);

    this.rootElement.innerHTML = template;
  }

  /**
   * @callback bindAddTodoHandler
   *
   * @param {string} text
   */

  /**
   * to add a todo after click in add-todo button
   * 
   * @method Bind 
   *
   * @param {bindAddTodoHandler} handler A callback function to set a new todo on service corresponding
   */
  bindAddTodo(handler) {
    this.rootElement.addEventListener("click", (event) => {
      if (event.target.id != "add-todo") {
        return;
      }

      let input = this.rootElement.querySelector("input"),
        text = input.value;

      handler(text);
    });
  }

  /**
   * @callback bindRemoveTodoHandler
   *
   * @param {number} id
   */

  /**
   * Remove a todo from saved todo after click on delete button
   * 
   * @method bindRemoveTodo 
   *
   * @param {bindRemoveTodoHandler} handler A function to remove a todo from service
   */
  bindRemoveTodo(handler) {
    this.rootElement.addEventListener("click", (event) => {
      if (!event.target.dataset.deleteTodo) {
        return;
      }

      let id = event.target.dataset.deleteTodo;

      handler(id);
    });
  }

  /**
   * @callback bindToggleTodoHandler
   *
   * @param {number} id
   * @param {string} newTextValue
   */

  /**
   * Toggle a saved todo to new title for it
   * 
   * @method bindToggleTodo 
   *
   * @param {bindToggleTodoHandler} handler A function to toggle a todo from service
   */
  bindToggleTodo(handler) {
    this.rootElement.addEventListener("click", (event) => {
      if (!event.target.dataset.toggleTodo) {
        return;
      }

      let id = event.target.dataset.toggleTodo;
      let parentNode = event.target.parentNode;
      let inputNode = document.createElement("input");
      let cloneNode = event.target.cloneNode();

      inputNode.dataset.toggleInput = id;
      inputNode.addEventListener("keypress", (event) => {
        let keyPressed = event.code;
        let newTextValue = event.currentTarget.value;

        if (keyPressed != "Enter") {
          return;
        }

        if (newTextValue) handler(id, newTextValue);
      });

      event.target.remove();
      parentNode.prepend(inputNode);
    });
  }
}
