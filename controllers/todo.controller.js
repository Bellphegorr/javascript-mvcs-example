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
    this.onTodoListChange(this.todoService.todoList.list);
  }

  /**
   * Display todoList 
   * 
   * @param {Array<TodoItemModel>} todoList 
   */
  onTodoListChange = (todoList) => {
    this.todoView.render(todoList);
  };

  /**
   * Add a new todo
   * 
   * @param {string} text 
   */
  handleAddTodo = (text) => {
    this.todoService.addTodo(text);
  };

  /**
   * Remove a todo by id
   * 
   * @param {number} id 
   */
  handleRemoveTodo = (id) => {
    this.todoService.removeTodo(id);
  };

  /**
   * Edit todo by id
   * 
   * @param {number} id 
   * @param {string} text 
   */
  handleToggleTodo = (id, text) => {
    this.todoService.toggleTodo(id, text);
  };
}
