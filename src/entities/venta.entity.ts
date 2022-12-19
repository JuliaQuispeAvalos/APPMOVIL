import { Column, Entity, PrimaryColumn } from "typeorm";



@Entity({name:'VENTA'})
export class VentaEntity{
    @PrimaryColumn({name:'IDVEN', nullable:false})
    id: number;

    @Column({name:'FECVEN', nullable:false})
    fecha: string;

    
    @Column({name:'IDCLI',nullable:false})
    cliente:number;

    @Column({name:'IDVEND',nullable:false})
    vendedor:number;
}
