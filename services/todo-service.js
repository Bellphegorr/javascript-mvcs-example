// Data modification
export class TodoService {
  constructor(TodoItemModel, TodoListModel) {
    this.TodoItemModel = TodoItemModel;
    this.TodoListModel = TodoListModel;

    this.todoList = new this.TodoListModel();
  }

  bindTodoChange(callback) {
    this.onTodoListChange = callback;
  }

  _commitPost(todoList, todoItem) {
    this.onTodoListChange(todoList);
  }

  _commitDelete(todoList, todoItem) {
    this.onTodoListChange(todoList);
  }

  _commitGet(todoList, todoItem) {
    this.onTodoListChange(todoList);
  }

  _commitPut(todoList, todoItem) {
    this.onTodoListChange(todoList);
  }

  addTodo(text) {
    let newTodo = new this.TodoItemModel(text, false);

    this.todoList.list.push(newTodo);

    this._commitPost(this.todoList.list, newTodo);
  }

  getTodo() {}

  removeTodo(id) {
    this.todoList.list = this.todoList.list.filter(
      (todoItem) => todoItem.id != id
    );

    this._commitDelete(this.todoList.list);
  }

  toggleTodo() {}
}
