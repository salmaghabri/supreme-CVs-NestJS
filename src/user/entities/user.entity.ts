import { Cv } from "../../cv/entities/cv.entity";
import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from "typeorm";

@Entity()
export class User {
@PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @OneToMany(()=>Cv, (cv: Cv)=> cv.user)
  cvs: Cv[]

}
