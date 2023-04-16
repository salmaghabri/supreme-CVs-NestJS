import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { rand } from '@ngneat/falso';
import { CvService } from './cv/cv.service';
import { SkillService } from './skill/skill.service';
import { Skill } from './skill/entities/skill.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);



//   const app = await NestFactory.createApplicationContext(AppModule);
//   const skillService=app.get(SkillService)
//   const cvService=app.get(CvService)
//  const cvs=await cvService.findAll(); 
//  const skills=await skillService.findAll(); 
//  cvs.map((cv)=> {
 
//     const s=rand([1,2,3]) 
//     let ss:Skill[]=[];  
//     for(let i=0; i<s;i++) {ss.push(rand(skills))}

//     cv.skills=ss; 

//     cvService.save(cv);
   
//  })
}
bootstrap();
