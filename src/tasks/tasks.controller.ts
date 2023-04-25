import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() request) {
    return this.tasksService.create(request);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }
}
