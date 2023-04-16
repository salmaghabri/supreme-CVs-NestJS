import { NestFactory } from "@nestjs/core";
import { AppModule } from "../../app.module";
import { rand, randFilePath, randFirstName, randIban, randJobTitle, randLastName, randNumber, seed } from '@ngneat/falso';
import { UserService } from "../../user/user.service";
import { CreateCvDto } from "../../cv/dto/create-cv.dto";
import { CvService } from "../../cv/cv.service";
import { SkillService } from "../../skill/skill.service";
import { Skill } from "../../skill/entities/skill.entity";
import { Cv } from "../../cv/entities/cv.entity";

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const userService=app.get(UserService)
    const skillService=app.get(SkillService)
    const cvService=app.get(CvService)
   

    
    // seed('some-constant-seed');
    const cvs=[]; 
    for(let i=0; i<4;i++){
        const cv=new Cv(); 
        cv.name=randLastName();
        cv.firstName=randFirstName();
        cv.age=randNumber({min:18, max:60});
        cv.job=randJobTitle();
        cv.path=randFilePath();
        cv.cin=randIban({countryCode:'DE'});
        cvService.create(cv);
        cvs.push(cv);
        console.log(cv,"ggggggggggggggggg")

    }
const users= await userService.findAll(); 
 const skills=await skillService.findAll(); 
 cvs.map((cv)=> {
    const u=rand(users);
    const s=rand([1,2,3]) 
    let ss=new Set();  
    for(let i=0; i<s;i++) ss.add(rand(skills))
    cv.user=u;
    cv.skills=ss; 

    cvService.save(cv);
   
 })

  

    }
    bootstrap();