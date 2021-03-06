// Dependency Injection

// Views
import { TodoView } from "../views/todo.view.js";

// Controllers
import { TodoController } from "../controllers/todo.controller.js";

// Services
import { TodoService } from "../services/todo-service.js";

// Templates
import { TodoTemplate } from "../template/todo.template.js";

/**
 * Application constant
 * 
 * @type {TodoController}
 */
const app = new TodoController(new TodoService(), new TodoView(TodoTemplate));
