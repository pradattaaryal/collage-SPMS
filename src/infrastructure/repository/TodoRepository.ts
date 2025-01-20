import { ITodo } from "../../core/domain/entity/Todo.entity";
import { BaseRepository } from "../base/BaseRepository";

class TodoRepository extends BaseRepository<ITodo> {
  constructor() {
    super();
    this.collection = "Student";
  }

  getTodoById(id: string) {
    return this.get(id);
  }

  getAllTodos() {
    return this.getMany();
  }
  
}

export default TodoRepository;
