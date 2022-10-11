import { HttpServiceAdapter } from '../../../shared/http-adapter/http-service.adapter';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class TransactionRepository {
  private readonly hostMock = process.env.HOST_MOCK;
  private readonly logger = new Logger(TransactionRepository.name);
  constructor(readonly httpServiceAdapter: HttpServiceAdapter) {}
  getTransactionById(id: number): Promise<any> {
    this.logger.log({ id }, 'search shipment');
    return this.httpServiceAdapter.requestGet(
      `${this.hostMock}/transactions/${id}`,
    );
  }
}
