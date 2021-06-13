import { TodoService } from "../services/todo-service.js";
import { TodoView } from "../views/todo.view.js";

/**
 * @class Bind at view and service
 */
export class TodoController {
  /**
   *
   * @param {TodoService} todoService instace of TodoService
   * @param {TodoView} todoView instace of TodoView
   */
  constructor(todoService, todoView) {
    this.todoService = todoService;
    this.todoView = todoView;

    // Bind
    this.todoService.bindTodoChange(this.onTodoListChange);
    this.todoView.bindAddTodo(this.handleAddTodo);
    this.todoView.bindRemoveTodo(this.handleRemoveTodo);

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
}
