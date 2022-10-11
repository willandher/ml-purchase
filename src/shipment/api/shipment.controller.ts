import { Controller, Get, Param } from '@nestjs/common';
import { ShipmentService } from '../service/shipment.service';

@Controller('api/v1/shipments')
export class ShipmentController {
  constructor(private readonly shipmentService: ShipmentService) {}
  @Get('/:id')
  getUser(@Param('id') id): Promise<any> {
    return this.shipmentService.getShipmentById(id);
  }
}
