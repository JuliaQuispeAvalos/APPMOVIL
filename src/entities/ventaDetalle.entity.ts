import { Column, Entity, PrimaryColumn } from "typeorm";



@Entity({name:'VENTA_DETALLE'})
export class VentaDetalleEntity{
    @PrimaryColumn({name:'IDVENDET',nullable:false})
    id:number;

    @Column({name:'CANVENDET',nullable:false})
    cantidad: number;
        
    @Column({name:'IDVEN',nullable:false})
    Idventa: number;

    @Column({name:'CODPRO',nullable:false})
    Idproducto: string;
}