import { NestFactory } from "@nestjs/core";
import { AppModule } from "../../app.module";
import { rand, randEmail, randPassword, randUserName, seed } from '@ngneat/falso';
import { CreateUserDto } from "../../user/dto/create-user.dto";
import { UserService } from "../../user/user.service";
async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const service=app.get(UserService)
    seed('some-constant-seed');
    for(let i=0; i<2;i++){
        const user=new CreateUserDto(); 
        user.username=randUserName();
        user.password=randPassword();
        user.email=randEmail();
        service.create(user);
    }


    // await app.close();

    }
    bootstrap();