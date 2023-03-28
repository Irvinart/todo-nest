import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {
  }

  @Get(':id')
  getTodo(@Param('id') id: number) {
    return this.todoService.getTodo(id)
  }

  @Get('')
  getAllTodo() {
    return this.todoService.getAllTodo()
  }

  @Post('')
  createTodo(@Body() todoDto: CreateTodoDto) {
    return this.todoService.createTodo(todoDto)
  }


  @Delete(':id')
  deleteTodo(@Param('id') id: number) {
    return this.todoService.deleteTodo(id)
  }

  @Patch('')
  updateTodo(@Body() updateDto: UpdateTodoDto) {
    return this.todoService.updateTodo(updateDto)
  }


}