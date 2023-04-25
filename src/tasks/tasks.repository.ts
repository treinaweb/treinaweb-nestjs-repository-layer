import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

export class TasksRepository {
  constructor(
    @InjectRepository(Task) private tasksRepository: Repository<Task>,
  ) {}

  repository = this.tasksRepository.extend({});
}
