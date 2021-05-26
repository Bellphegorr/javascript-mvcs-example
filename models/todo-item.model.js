// Data representation (anemic)
export class TodoItemModel {
  constructor(text, complete) {
    this.id = new Date().getTime();
    this.text = text;
    this.complete = complete;
  }
}
