import { TodoItemModel } from "../models/todo-item.model.js";
// import { TodoListModel } from "../models/todo-list.model.js";

/**
 * Data modification (use the models to change and control the data values application)
 * 
 * @class 
 */
export class TodoService {
  constructor() {
    /** @param {Array<TodoItemModel>}  */
    this.todoList = this.getAllTodo();
  }

  /**
   * @callback viewCallback
   *
   * @param {Array<TodoItemModel>} todoList
   */

  /**
   * Bind to receive a function to handle after change a todo item
   * 
   * @method bindTodoChange
   *
   * @param {viewCallback} callback Function to handle after change a todo item
   */
  bindTodoChange(callback) {
    this.onTodoListChange = callback;
  }

  /**
   * After change, delete ou toggle a todo, commit and re-render todo
   * 
   * @method _commit 
   *
   * @private
   *
   * @param {Array<TodoItemModel>} todoList A list of todo to be save
   */
  _commit(todoList) {
    localStorage.todo = JSON.stringify(todoList);

    this.onTodoListChange(todoList);
  }

  /**
   * Add todo
   * 
   * @method addTodo 
   *
   * @param {string} text Text to add new todo
   */
  addTodo(text) {
    /**
     * @type {TodoItemModel}
     */
    let newTodo = new TodoItemModel(text, false);

    this.todoList.push(newTodo);

    this._commit(this.todoList);
  }

  /**
   * Get all todo from local storage
   * 
   * @method getAllTodo 
   *
   * @return All the todo saved on local storage
   */
  getAllTodo() {
    return JSON.parse(localStorage.todo);
  }

  /**
   * Remove a todo by id
   * 
   * @method removeTodo 
   *
   * @param {number} id Todo id that will be removed
   */
  removeTodo(id) {
    this.todoList = this.todoList.filter((todoItem) => todoItem.id != id);

    this._commit(this.todoList);
  }

  /**
   * Toggle a todo by id
   * 
   * @method toggleTodo 
   *
   * @param {number} id Todo id that will be toggled
   * @param {string} text Text to toggle todo
   */
  toggleTodo(id, text) {
    /**
     * @type {TodoItemModel}
     */
    let todoIndex = this.todoList.findIndex((todo) => todo.id == id);

    this.todoList[todoIndex].text = text;

    this._commit(this.todoList);
  }
}
