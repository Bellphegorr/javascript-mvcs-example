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
    this.todoService = todoService;
    this.todoView = todoView;

    // Bind
    this.todoService.bindTodoChange(this.onTodoListChange);
    this.todoView.bindAddTodo(this.handleAddTodo);
    this.todoView.bindRemoveTodo(this.handleRemoveTodo);
    this.todoView.bindToggleTodo(this.handleToggleTodo);

    // Initial display
    this.onTodoListChange(this.todoService.todoList.list);

    this.example = new TodoService();

    this.example.bindTodoChange;
  }

  onTodoListChange = (todoList) => {
    this.todoView.render(todoList);
  };

  handleAddTodo = (text) => {
    this.todoService.addTodo(text);
  };

  handleRemoveTodo = (id) => {
    this.todoService.removeTodo(id);
  };

  handleToggleTodo = (id, text) => {
    this.todoService.toggleTodo(id, text);
  };
}
