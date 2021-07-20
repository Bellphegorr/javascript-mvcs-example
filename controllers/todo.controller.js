import { TodoItemModel } from "../models/todo-item.model.js";
import { TodoService } from "../services/todo-service.js";
import { TodoView } from "../views/todo.view.js";

/**
 * Bind at view and service
 *
 * @class
 */
export class TodoController {
  /**
   * @param {TodoService} todoService instance of TodoService
   * @param {TodoView} todoView instance of TodoView
   */
  constructor(todoService, todoView) {
    /** @type {TodoService} */
    this.todoService = todoService;
    /** @type {TodoView} */
    this.todoView = todoView;

    // Bind
    this.todoService.bindTodoChange(this.onTodoListChange);
    this.todoView.bindAddTodo(this.handleAddTodo);
    this.todoView.bindRemoveTodo(this.handleRemoveTodo);
    this.todoView.bindToggleTodo(this.handleToggleTodo);

    // Initial display
    this.onTodoListChange(this.todoService.todoList);
  }

  /**
   * Display todoList
   *
   * @method onTodoListChange
   *
   * @private
   *
   * @param {Array<TodoItemModel>} todoList The todo list will be rendered
   */
  onTodoListChange = (todoList) => {
    this.todoView.render(todoList);
  };

  /**
   * Add a new todo
   * 
   * @method handleAddTodo
   *
   * @private
   *
   * @param {string} text String text to create a new todo
   */
  handleAddTodo = (text) => {
    this.todoService.addTodo(text);
  };

  /**
   * Remove a todo by id
   * 
   * @method handleRemoveTodo
   *
   * @private
   *
   * @param {number} id ID of todo that will be removed
   */
  handleRemoveTodo = (id) => {
    this.todoService.removeTodo(id);
  };

  /**
   * Edit todo by id
   * 
   * @method handleToggleTodo
   *
   * @private
   *
   * @param {number} id ID of todo that will be toggled
   * @param {string} text Text to toggle todo
   */
  handleToggleTodo = (id, text) => {
    this.todoService.toggleTodo(id, text);
  };
}
