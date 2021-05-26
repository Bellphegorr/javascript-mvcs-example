// Dependency Injection

// Models
import { TodoItemModel } from "../models/todo-item.model.js";
import { TodoListModel } from "../models/todo-list.model.js";

// Views
import { TodoView } from "../views/todo.view.js";

// Controllers
import { TodoController } from "../controllers/todo.controller.js";

// Services
import { TodoService } from "../services/todo-service.js";

// Templates
import { TodoTemplate } from "../template/todo.template.js";

const app = new TodoController(
  new TodoService(TodoItemModel, TodoListModel),
  new TodoView(TodoTemplate)
);
