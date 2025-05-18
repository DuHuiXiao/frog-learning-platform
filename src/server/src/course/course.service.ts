import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {
  constructor(@InjectRepository(Course) private readonly course: Repository<Course>){}
  create(createCourseDto: CreateCourseDto) {
    return this.course.save(createCourseDto);
  }

  findAll() {
    return this.course.find();
  }

  findOne(id: number) {
    return this.course.findOne({where: {id}});
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const c = await this.findOne(id);
    if(!c) throw new Error('Course not found');
    Object.assign(c, updateCourseDto);
    c.updatedTime = new Date();
    return this.course.save(c);
  }

  remove(id: number) {
    return this.course.delete(id);
  }
}
