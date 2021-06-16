import { TodoItemModel } from '../models/todo-item.model.js';
import {TodoTemplate} from '../template/todo.template.js';

/**
 * @class View modification (class to modifier and view control)
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
   * @param {Array<TodoItemModel>} todoList 
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
   * @method Bind to add a todo after click in add-todo button
   * 
   * @param {bindAddTodoHandler} handler 
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


  bindRemoveTodo(handler) {
    this.rootElement.addEventListener("click", (event) => {
      if (!event.target.dataset.deleteTodo) {
        return;
      }

      let id = event.target.dataset.deleteTodo;

      handler(id);
    });
  }

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
