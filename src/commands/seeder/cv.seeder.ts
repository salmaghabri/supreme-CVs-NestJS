import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";
import { rand, randFilePath, randFirstName, randJobTitle, randLastName, randNumber, seed } from '@ngneat/falso';
import { UserService } from "src/user/user.service";
import { CreateCvDto } from "src/cv/dto/create-cv.dto";
import { CvService } from "src/cv/cv.service";
import { SkillService } from "src/skill/skill.service";
import { Skill } from "src/skill/entities/skill.entity";
async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const userService=app.get(UserService)
    const skillService=app.get(SkillService)
    const cvService=app.get(CvService)
    // const userModule = app.select(UserModule).get(UserModule, { strict: true });
    // const userRepo = app.get(getRepositoryToken(User));

    
    seed('some-constant-seed');
    for(let i=0; i<5;i++){
        const cv=new CreateCvDto(); 
        cv.name=randLastName();
        cv.firstName=randFirstName();
        cv.age=randNumber({min:18, max:60});
        cv.job=randJobTitle();
        cv.path=randFilePath();
        cvService.create(cv);

    }
const users= await userService.findAll(); 
 const cvs=await cvService.findAll(); 
 const skills=await skillService.findAll(); 
 cvs.map((cv)=> {
    const u=rand(users);
    const s=rand([1,2,3]) 
    let ss:Skill[]=[];  
    for(let i=0; i<s;i++) ss.push(rand(skills))
    cv.user=u;
    cv.skills=ss; 

    cvService.save(cv);
   
 })

 await app.close();
  

    }
    bootstrap();