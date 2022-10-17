import { Injectable } from '@nestjs/common';
import { ShipmentRepository } from '../database/repository/shipment.repository';

@Injectable()
export class ShipmentService {
  constructor(private readonly shipmentRepository: ShipmentRepository) {}

  async getShipmentById(id: number): Promise<any> {
    return this.shipmentRepository.getShipmentById(id);
  }
}
