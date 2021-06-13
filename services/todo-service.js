import { TodoItemModel, todoItemType } from "../models/todo-item.model.js";
import { TodoListModel } from "../models/todo-list.model.js";

/**
 * @class Data modification (use the models to change and control the data values application)
 */
export class TodoService {
  /**
   *
   * @param {TodoItemModel} TodoItemModel Model indicated a todo item
   * @param {TodoListModel} TodoListModel Model indicated a list of todo items
   */
  constructor(TodoItemModel, TodoListModel) {
    this.TodoItemModel = TodoItemModel;
    this.TodoListModel = TodoListModel;

    debugger;

    this.todoList = new this.TodoListModel();
  }

  /**
   *  @callback viewCallback
   */

  /**
   * Bind to recieve a function to handle after change a todo item
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
     * @type {todoItemType}
     */
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
