import { Injectable } from '@nestjs/common';
import { Todo } from "./todo.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";

@Injectable()
export class TodoService {

  constructor(@InjectModel(Todo) private todoRepository: typeof Todo) {
  }

  async createTodo(dto: CreateTodoDto) {
    return await this.todoRepository.create(dto)
  }

  async getAllTodo() {
    return await this.todoRepository.findAll();
  }

  async getTodo(id: number) {
    return await this.todoRepository.findOne({where: { id }});
  }

  async deleteTodo(id: number) {
    return await this.todoRepository.destroy({where: { id }})
  }

  async updateTodo(dto: UpdateTodoDto) {
    return await this.todoRepository.update(dto, {
      where: {id: dto.id}
    })
  }
}
