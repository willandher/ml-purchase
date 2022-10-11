import { Injectable } from '@nestjs/common';
import { TransactionRepository } from '../database/repository/transaction.repository';

@Injectable()
export class TransactionService {
  constructor(private readonly shipmentRepository: TransactionRepository) {}

  async getTransactionById(id: number): Promise<any> {
    return this.shipmentRepository.getTransactionById(id);
  }
}
