import { Injectable } from '@nestjs/common';
import { PaymentRepository } from '../database/repository/payment.repository';

@Injectable()
export class PaymentService {
  constructor(private readonly shipmentRepository: PaymentRepository) {}

  async getPaymentById(id: number): Promise<any> {
    return this.shipmentRepository.getPaymentById(id);
  }
}
