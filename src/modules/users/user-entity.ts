import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    idade: number

    constructor(name: string, idade: number) {
        this.name = name
        this.idade = idade
    }
}