import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = new User();
    user.name = createUserDto.name;
    if (createUserDto.age) {
      user.age = createUserDto.age;
    }
    return this.user.save(user);
  }

  findAll() {
    return this.user.find();
  }

  async findOne(id: number): Promise<User | null> {
    const user = await this.user.findOne({
      where: { id },
    });
    return user ?? null;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    if (!user) {
      return null;
    }
    if (updateUserDto.name) {
      user.name = updateUserDto.name;
    }
    if (updateUserDto.age) {
      user.age = updateUserDto.age;
    }
    return this.user.save(user);
  }

  remove(id: number) {
    return this.user.delete(id);
  }
}
