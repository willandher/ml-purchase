import { AdapterModule } from '../shared/http-adapter/adapter.module';
import { TransactionController } from './api/transaction.controller';
import { TransactionRepository } from './database/repository/transaction.repository';
import { TransactionService } from './service/transaction.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [AdapterModule],
  controllers: [TransactionController],
  providers: [TransactionRepository, TransactionService],
})
export class TransactionModule {}
