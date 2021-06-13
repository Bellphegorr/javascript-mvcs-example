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

  bindRemoveTodo(handler) {
    this.rootElement.addEventListener("click", (event) => {
      if (!event.target.dataset.deleteTodo) {
        return;
      }

      let id = event.target.dataset.deleteTodo;

      handler(id);
    });
  }

  bindToggleTodo(handler) {
    this.rootElement.addEventListener("click", (event) => {
      if (!event.target.dataset.toggleTodo) {
        return;
      }

      let id = event.target.dataset.toggleTodo;

      console.log(event.target);
      console.log(event.currentTarget);

      handler(id, "test");
    });
  }
}
