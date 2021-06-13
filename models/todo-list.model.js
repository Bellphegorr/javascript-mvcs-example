import { TodoItemModel } from "./todo-item.model";

/**
 * @class Define a list of todo items
 */
export class TodoListModel {
  constructor() {
    /**
     * @type {Array<!TodoItemModel>}
     */
    this.list = [{ id: 1, text: "example", complete: false }];
  }
}
