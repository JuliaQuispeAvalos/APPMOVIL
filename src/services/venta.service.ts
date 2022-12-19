import { Injectable } from "@nestjs/common";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { VentaEntity } from "src/entities/venta.entity";
import { DataSource, Repository } from "typeorm";


@Injectable()
export class VentaService {

    constructor(@InjectRepository(VentaEntity) private ventarepository: Repository<VentaEntity>,
        @InjectDataSource() private dataSource: DataSource) {

    }


    registrar(venta: VentaEntity) {
        return this.ventarepository.save(venta);
    }

    findall() {
        return this.ventarepository.find();
    }


    ultimaventa() {
        return this.dataSource.query(`SELECT MAX(IDVEN) AS NROVENTA FROM VENTA`)
    }
}