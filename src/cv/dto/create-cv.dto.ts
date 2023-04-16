import { Skill } from "../../skill/entities/skill.entity";
import { User } from "../../user/entities/user.entity";
import { MinLength, MaxLength, IsNotEmpty } from "class-validator";


export class CreateCvDto {
    name:string;
    firstName:string;
    age:number;
    cin:string;
    job: string;
    path: string; 
    user:User;
    skills:Skill[];

}
