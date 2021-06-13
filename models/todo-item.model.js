// Model with class

/**
 * @class Define a todo item model
 */
export class TodoItemModel {
  /**
   * @param {string} text Todo's text
   * @param {string} complete Todo's complete status
   */
  constructor(text, complete) {
    /** @type {!number} */
    this.id = new Date().getTime();
    /** @type {!string} */
    this.text = text;
    /** @type {!boolean} */
    this.complete = complete;
  }
}

// Model with typedef

/**
 * @typedef {!{id: number, text: string, complete: boolean}} todoItemType
 */
