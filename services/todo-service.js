import { TodoItemModel } from "../models/todo-item.model.js";
// import { TodoListModel } from "../models/todo-list.model.js";

/**
 * @class Data modification (use the models to change and control the data values application)
 */
export class TodoService {
  constructor() {
    /** @param {Array<TodoItemModel>}  */
    this.todoList = Array(new TodoItemModel('example', false));

    debugger;
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
   * @method _commit After change, delete ou toggle a todo, commit and re-render todo
   * 
   * @private
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
    let newTodo = new TodoItemModel(text, false);

    this.todoList.push(newTodo);

    this._commit(this.todoList);
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
    let todo = this.todoList.filter((todo) => (todo.id = id));
  }

  /**
   * Remove a todo by id
   * 
   * @param {number} id 
   */
  removeTodo(id) {
    this.todoList = this.todoList.filter(
      (todoItem) => todoItem.id != id
    );

    this._commit(this.todoList);
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
    let todoIndex = this.todoList.findIndex((todo) => todo.id == id);

    this.todoList[todoIndex].text = text;

    this._commit(this.todoList);
  }
}
