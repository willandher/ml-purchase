import { Controller, Get, Param } from '@nestjs/common';
import { TransactionService } from '../service/transaction.service';

@Controller('api/v1/transactions')
export class TransactionController {
  constructor(private readonly shipmentService: TransactionService) {}
  @Get('/:id')
  getUser(@Param('id') id): Promise<any> {
    return this.shipmentService.getTransactionById(id);
  }
}
