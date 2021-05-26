// Bind class (union between service & view)
export class TodoController {
  constructor(todoService, todoView) {
    this.todoService = todoService;
    this.todoView = todoView;

    // Bind
    this.todoService.bindTodoChange(this.onTodoListChange);
    this.todoView.bindAddTodo(this.handleAddTodo);
    this.todoView.bindRemoveTodo(this.handleRemoveTodo);

    // Initial display
    this.onTodoListChange(this.todoService.todoList.list);
  }

  onTodoListChange = (todoList /*service parameter*/) => {
    this.todoView.render(todoList); /*view method*/
  };

  handleAddTodo = (text /*view parameter*/) => {
    this.todoService.addTodo(text); /*service method*/
  };

  handleRemoveTodo = (id) => {
    this.todoService.removeTodo(id);
  };
}
