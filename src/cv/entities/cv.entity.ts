// import { User } from "@ngneat/falso";
import { Skill } from "../../skill/entities/skill.entity";
import { User } from "../../user/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Cv {
@PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  firstName: string;
  @Column()
  age: number;
  @Column()
  cin: string;
  @Column()
  job: string;
  @Column()
  path: string;
  @ManyToOne(()=>User, (user:User) =>user.cvs,{eager:true,
    onDelete: "CASCADE",
  })
  user:User;
  @ManyToMany(()=>Skill,(skill)=>skill.cvs,{eager:true,
    cascade: ['insert', 'update']
  })
  @JoinTable()
  skills:Skill[];
}
