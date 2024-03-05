import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class ProductEntity {
    @PrimaryColumn()
    id: string;
    
    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    quantity: number;
}