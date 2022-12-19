import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntity } from './entities/cliente.entity';
import { clienteController } from './controllers/cliente.controller';
import { ClienteService } from './services/cliente.service';
import { UbigeoEntity } from './entities/ubigeo.entity';
import { UbigeoController } from './controllers/ubigeo.controller';
import { UbigeoService } from './services/ubigeo.service';
import { ProductoEntity } from './entities/producto.entity';
import { ProductoService } from './services/producto.service';
import { ProductoController } from './controllers/producto.controller';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { VentaEntity } from './entities/venta.entity';
import { VentaController } from './controllers/venta.controller';
import { VentaService } from './services/venta.service';
import { VentaDetalleEntity } from './entities/ventaDetalle.entity';
import { VentaDetalleController } from './controllers/ventaDetalle.controller';
import { VentaDetallaService } from './services/ventaDetalle.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "oracle",
      "host": "localhost",
      "port": 1521,
      "username": "ADMIN222",
      "password": "abc123",
      "sid": "xe",
      "entities": [__dirname + "/**/**.entity{.ts,.js}"],
      "synchronize": false,
      "logging": true
    }),
    TypeOrmModule.forFeature([ClienteEntity,UbigeoEntity,ProductoEntity,VentaEntity,VentaDetalleEntity])
  ],
  controllers: [AppController, clienteController,UbigeoController,ProductoController,AuthController,VentaController,VentaDetalleController],
  providers: [AppService, ClienteService,UbigeoService,ProductoService,AuthService,VentaService,VentaDetallaService]
})
export class AppModule {
}