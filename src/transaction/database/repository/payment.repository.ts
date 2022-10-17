import { HttpServiceAdapter } from '../../../shared/http-adapter/http-service.adapter';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class PaymentRepository {
  private readonly hostMock = process.env.HOST_MOCK;
  private readonly logger = new Logger(PaymentRepository.name);
  constructor(readonly httpServiceAdapter: HttpServiceAdapter) {}
  getPaymentById(id: number): Promise<any> {
    this.logger.log({ id }, 'search shipment');
    return this.httpServiceAdapter.requestGet(
      `${this.hostMock}/payments/${id}`,
    );
  }
}
