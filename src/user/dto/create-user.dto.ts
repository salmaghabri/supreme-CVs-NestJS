import { MinLength, MaxLength, IsNotEmpty } from "class-validator";

export class CreateUserDto {

    username: string;
    @IsNotEmpty({ message:"email obligatoire"}) 
    email: string; 
    password: string; 


}
