import { Cv } from "../../cv/entities/cv.entity";
import { PrimaryGeneratedColumn, Column, ManyToMany, Entity } from "typeorm";
@Entity()
export class Skill {
    @PrimaryGeneratedColumn()
  id: number;
  @Column()
  designation: string;
  @ManyToMany(()=>Cv)
  cvs:Cv[];
}
