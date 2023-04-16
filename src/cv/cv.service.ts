import { Injectable } from '@nestjs/common';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { Cv } from './entities/cv.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CvService {
  constructor(@InjectRepository(Cv)
  private repository: Repository<Cv>){}
  async create(createCvDto: CreateCvDto) {
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
