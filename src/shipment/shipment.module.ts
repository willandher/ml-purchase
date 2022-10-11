import { AdapterModule } from '../shared/http-adapter/adapter.module';
import { ShipmentController } from './api/shipment.controller';
import { ShipmentRepository } from './database/repository/shipment.repository';
import { ShipmentService } from './service/shipment.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [AdapterModule],
  controllers: [ShipmentController],
  providers: [ShipmentRepository, ShipmentService],
})
export class ShipmentModule {}
