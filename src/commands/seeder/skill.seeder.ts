import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";
import { randSkill,  seed } from '@ngneat/falso';
import { SkillService } from "src/skill/skill.service";
import { CreateSkillDto } from "src/skill/dto/create-skill.dto";
async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const skillService=app.get(SkillService)
    // seed('some-constant-seed');
    for(let i=0; i<2;i++){
        const skill=new CreateSkillDto(); 
        skill.designation=randSkill();
        
        skillService.create(skill);
        
    }
    await app.close();

    }
    bootstrap();