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
   * @callback viewCallback
   * 
   * @param {Array<TodoItemModel>} todoList
   */

  /**
   * Bind to receive a function to handle after change a todo item
   *
   * @param {viewCallback} callback Function to handle after change a todo item
   */
  bindTodoChange(callback) {
    this.onTodoListChange = callback;
  }

  /**
   * After change, delete ou toggle a todo, commit and re-render todo
   * 
   * @param {Array<TodoItemModel>} todoList 
   */
  _commit(todoList) {
    this.onTodoListChange(todoList);
  }

  /**
   * Add todo
   * 
   * @param {string} text 
   */
  addTodo(text) {
    /**
     * @type {TodoItemModel}
     */
    let newTodo = new this.TodoItemModel(text, false);

    this.todoList.list.push(newTodo);

    this._commit(this.todoList.list);
  }

  /**
   * Get a todo by id
   * 
   * @param {number} id 
   */
  getTodo(id) {
    /**
     * @type {ITodoItemModel}
     */
    let todo = this.todoList.list.filter((todo) => (todo.id = id));
  }

  /**
   * Remove a todo by id
   * 
   * @param {number} id 
   */
  removeTodo(id) {
    this.todoList.list = this.todoList.list.filter(
      (todoItem) => todoItem.id != id
    );

    this._commit(this.todoList.list);
  }

  /**
   * Toggle a todo by id
   * 
   * @param {number} id 
   * @param {string} text 
   */
  toggleTodo(id, text) {
    /**
     * @type {TodoItemModel}
     */
    let todoIndex = this.todoList.list.findIndex((todo) => todo.id == id);

    this.todoList.list[todoIndex].text = text;

    debugger;

    this._commit(this.todoList.list);
  }
}
