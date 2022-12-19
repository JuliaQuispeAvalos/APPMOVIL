import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { UbigeoEntity } from "./ubigeo.entity";

@Entity({name:'PERSONA'})
export class ClienteEntity{

    @PrimaryColumn({name: 'IDPER', nullable:false})
    id: number;

    @Column({name:'NOMPER', nullable:false})
    nombre:string;

    @Column({name:'APEPATPER', nullable:false})
    apellidoPat:string;

    @Column({name:'APEMATPER', nullable:false})
    apellidoMat:string;

    @Column({name:'EMAILPER', nullable:false})
    email:string;

    @Column({name:'DNIPER', nullable:false})
    dni:string;

    @Column({name:'CELPER', nullable:false})
    celular:string;
    
    @Column({name:'DIRPER', nullable:false})
    direccion:string;
    
    @Column({name:'TIPPER', nullable:false})
    rol:string;

    @Column({name:'ESTPER', nullable:false})
    estado:string;

    @Column({name:'FECNACPER', nullable:false})
    fecha:string;

    @Column({name:'PASSPER', nullable:false})
    contraseña:string;

    //@Column({name:'CODUBI', nullable:false})
    //ubigeo:string;

    @OneToOne(() => UbigeoEntity)
    @JoinColumn({name: 'CODUBI'})
    ubigeo: UbigeoEntity;
}