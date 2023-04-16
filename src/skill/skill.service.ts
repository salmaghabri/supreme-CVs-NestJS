import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillService {
  constructor(@InjectRepository(Skill)
  private repository: Repository<Skill>){}


  async create(createSkillDto: CreateSkillDto) {
    const newSkill=this.repository.create(createSkillDto);
    return await this.repository.save(newSkill) ;
  }

  async findAll() {
    return await this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({id}) ;
  }

  async update(id: number, updateSkillDto: UpdateSkillDto) {
    return await this.repository.update(id, updateSkillDto);
  }

   remove(id: number) {
    return  this.repository.delete(id);
  }
}
