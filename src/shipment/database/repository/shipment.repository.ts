import { HttpServiceAdapter } from '../../../shared/http-adapter/http-service.adapter';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ShipmentRepository {
  private readonly hostMock = process.env.HOST_MOCK;
  private readonly logger = new Logger(ShipmentRepository.name);
  constructor(readonly httpServiceAdapter: HttpServiceAdapter) {}
  getShipmentById(id: number): Promise<any> {
    this.logger.log({ id }, 'search shipment');
    return this.httpServiceAdapter.requestGet(
      `${this.hostMock}/shipments/${id}`,
    );
  }
}
