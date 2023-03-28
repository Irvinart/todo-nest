import { Module } from '@nestjs/common';
import { TodoModule } from "./controllers/todo/todo.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { Todo } from "./controllers/todo/todo.model";
import { Tag } from "./controllers/tag/tag.model";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      models: [Todo, Tag],
      autoLoadModels: true
    }),
    TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
