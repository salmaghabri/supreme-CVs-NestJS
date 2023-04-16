import { Injectable } from '@nestjs/common';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { Cv } from './entities/cv.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { Skill } from 'src/skill/entities/skill.entity';

@Injectable()
export class CvService {
  constructor(
    @InjectRepository(Cv)
  private repository: Repository<Cv>
  // @InjectRepository(Skill)
  // private skillRepository: Repository<Skill>
  // @InjectRepository(User)
  // private userrepository: Repository<User>
  )
  {}
  async create(createCvDto: CreateCvDto) {
    // return await this.repository.save(createCvDto);
 
    
    const newCv=this.repository.create(createCvDto);
    // newCv.skills=[];
    // newCv.user=null; 
    return await this.repository.save(newCv);
  }

 async  findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return  await this.repository.find({
      where:{id:id},
      relations :{
        skills: true,
        user:true
      }
    });
  }

  async update(id: number, updateCvDto: UpdateCvDto) {
    return await this.repository.update(id,updateCvDto );
  }
  async save(cv){
    return await this.repository.save(cv);
  }

  async remove(id: number) {
    return await this.repository.delete(id);
    ;
  }
}
