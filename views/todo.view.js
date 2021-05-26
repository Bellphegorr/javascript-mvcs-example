// User interface manager
export class TodoView {
  constructor(TodoTemplate) {
    this.TodoTemplate = TodoTemplate;

    this.rootElement = document.querySelector("#root");
  }

  render(todoList) {
    let template = this.TodoTemplate.renderView(todoList);

    this.rootElement.innerHTML = template;
  }

  bindAddTodo(handler) {
    this.rootElement.addEventListener("click", (event) => {
      if (event.target.id != "add-todo") {
        return;
      }

      let input = this.rootElement.querySelector("input"),
        text = input.value;

      handler(text);
    });
  }
}
