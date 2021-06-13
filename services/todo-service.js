import { TodoItemModel } from "../models/todo-item.model.js";
import { TodoListModel } from "../models/todo-list.model.js";

/**
 * @class Data modification (use the models to change and control the data values application)
 */
export class TodoService {
  constructor() {
    /** @param {TodoItemModel} TodoItemModel Model indicated a todo item */
    this.TodoItemModel = TodoItemModel;
    /** @param {TodoListModel} TodoListModel Model indicated a list of todo items */
    this.TodoListModel = TodoListModel;

    this.todoList = new this.TodoListModel();
  }

  /**
   *  @callback viewCallback
   */

  /**
   * Bind to receive a function to handle after change a todo item
   *
   * @param {viewCallback} callback Function to handle after change a todo item
   */
  bindTodoChange(callback) {
    this.onTodoListChange = callback;
  }

  _commitPost(todoList) {
    this.onTodoListChange(todoList);
  }

  _commitDelete(todoList) {
    this.onTodoListChange(todoList);
  }

  _commitGet(todoList) {
    this.onTodoListChange(todoList);
  }

  _commitPut(todoList) {
    this.onTodoListChange(todoList);
  }

  addTodo(text) {
    /**
     * @type {TodoItemModel}
     */
    let newTodo = new this.TodoItemModel(text, false);

    this.todoList.list.push(newTodo);

    this._commitPost(this.todoList.list);
  }

  getTodo(id) {
    /**
     * @type {ITodoItemModel}
     */
    let todo = this.todoList.list.filter((todo) => (todo.id = id));
  }

  removeTodo(id) {
    this.todoList.list = this.todoList.list.filter(
      (todoItem) => todoItem.id != id
    );

    this._commitDelete(this.todoList.list);
  }

  toggleTodo(id, text) {
    /**
     * @type {TodoItemModel}
     */
    let todoIndex = this.todoList.list.findIndex((todo) => todo.id == id);

    this.todoList.list[todoIndex].text = text;

    debugger;

    this._commitPut(this.todoList.list);
  }
}
