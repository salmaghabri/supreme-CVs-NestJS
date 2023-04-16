import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User)
  private repository: Repository<User>){}

  async create(createUserDto: CreateUserDto) {
    const newUser=this.repository.create(createUserDto)
    return this.repository.save(newUser);
  }

  async findAll() {
    return await this.repository.find();  }

  async findOne(id: number) {
    return await this.repository.find({
      where:{
        id:id
      }
      ,relations: {
      cvs:true
    },});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.repository.update(id,updateUserDto);
  }

  async remove(id: number) {
    return  await this.repository.delete(id);
  }
}
