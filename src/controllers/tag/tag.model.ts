
import { Column, DataType, Model, Table } from "sequelize-typescript";

export interface TagCreationAttrs {
  name: string;
  type: number;
  color: string;
}

@Table({tableName: 'tags'})
export class Tag extends Model<Tag,TagCreationAttrs > {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  name: string;

  @Column({type: DataType.INTEGER, allowNull: false})
  type: number;

  @Column({type: DataType.STRING, allowNull: false})
  color: string;
}