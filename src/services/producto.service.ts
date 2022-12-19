import { Injectable } from "@nestjs/common";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { ProductoEntity } from "src/entities/producto.entity";
import { DataSource, Repository } from "typeorm";


@Injectable()
export class ProductoService{

    constructor(@InjectRepository(ProductoEntity) private productorepository: Repository<ProductoEntity>,
    @InjectDataSource() private dataSource:DataSource){

    }

    listar(){
        return this.productorepository.find();
    }

    finByName(nombre:string){
        return this.productorepository.findBy({nombre} )
        //return this.dataSource.query(`SELECT * FROM PRODUCTO WHERE NOMPRO LIKE '${nombre}%'`)
    }


    registrar(producto:ProductoEntity){

        return this.productorepository.save(producto);
    }

    findById(id:string){
        return this.productorepository.findBy({id} )
       
    }

    actualizar(producto:ProductoEntity){
        return this.productorepository.save(producto);
    
    }

    deleteLogical(id: string) {
        this.findById(id).then(res => {
          const productos = res[0];
          productos.estado = "I";
          this.productorepository.save(productos);
          return productos;
        });
      }
}