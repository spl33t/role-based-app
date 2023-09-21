import { Module } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from "./users.controller";


@Module({
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
