import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";

@Entity({name:'PRODUCTO'})
export class ProductoEntity{

    @PrimaryColumn({name: 'CODPRO', nullable:false})
    id: string;

    @Column({name:'NOMPRO', nullable:false})
    nombre:string;

    @Column({name:'PREPRO', nullable:false})
    precio: number;

    @Column({name:'TIPPRO', nullable:false})
    tipo: string;

    @Column({name:'TAMPRO', nullable:false})
    tamaño: string;

   
    @Column({name:'STOCKPRO', nullable:false})
    stock: number;

    @Column({name:'ESTPRO', nullable:false})
    estado: string;

    @Column({name:'DETPRO', nullable:false})
    descripcion: string;

   }





