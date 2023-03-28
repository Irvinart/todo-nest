
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface TodoCreationAttrs {
  title: string;
  content: string;
  author: string;
  likes: number;
  dislikes: number;
  status: number;
}

enum Status {
  New,
  InProgress,
  Completed
}

@Table({tableName: 'todos'})
export class Todo extends Model<Todo,TodoCreationAttrs > {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  @Column({type: DataType.STRING, allowNull: false})
  title: string;
  @Column({type: DataType.STRING, allowNull: false})
  content: string;
  @Column({type: DataType.INTEGER, defaultValue: 0})
  likes: number;
  @Column({type: DataType.INTEGER, defaultValue: 0})
  dislikes: number;
  @Column({type: DataType.STRING})
  author: string;
  @Column({type: DataType.INTEGER, defaultValue: 0})
  status: Status
  @Column({type: DataType.DATE})
  deadLine: Date
}