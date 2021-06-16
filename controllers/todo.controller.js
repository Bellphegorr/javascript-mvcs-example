import { TodoItemModel } from "../models/todo-item.model.js";
import { TodoService } from "../services/todo-service.js";
import { TodoView } from "../views/todo.view.js";

/**
 * @class Bind at view and service
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
   * @method onTodoListChange Display todoList 
   * 
   * @private 
   * 
   * @param {Array<TodoItemModel>} todoList 
   */
  onTodoListChange = (todoList) => {
    this.todoView.render(todoList);
  };

  /**
   * @method handleAddTodo Add a new todo
   * 
   * @private
   * 
   * @param {string} text 
   */
  handleAddTodo = (text) => {
    this.todoService.addTodo(text);
  };

  /**
   * @method handleRemoveTodo Remove a todo by id
   * 
   * @private
   * 
   * @param {number} id 
   */
  handleRemoveTodo = (id) => {
    this.todoService.removeTodo(id);
  };

  /**
   * @method handleToggleTodo Edit todo by id
   * 
   * @private
   * 
   * @param {number} id 
   * @param {string} text 
   */
  handleToggleTodo = (id, text) => {
    this.todoService.toggleTodo(id, text);
  };
}
