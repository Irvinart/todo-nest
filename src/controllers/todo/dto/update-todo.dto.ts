export class UpdateTodoDto {
  readonly id: number;
  readonly title: string;
  readonly content: string;
  readonly likes: number;
  readonly dislikes: number;
  readonly status: number;
}