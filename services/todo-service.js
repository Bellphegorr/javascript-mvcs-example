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

  async _commitPost(todoList, todoItem) {
    // let response = await fetch("localhost:5000/addTodo", {
    //   method: "Post",
    //   body: newTodo,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // if (response.status) {
    //   this.onTodoListChange(todoList);
    // } else {
    //   //
    // }

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

  async addTodo(text) {
    let newTodo = new this.TodoItemModel(text, false);

    this.todoList.list.push(newTodo);

    await this._commitPost(this.todoList.list, newTodo);
  }

  getTodo() {}

  removeTodo() {}

  toggleTodo() {}
}
