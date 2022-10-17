import { AdapterModule } from '../shared/http-adapter/adapter.module';
import { PaymentController } from './api/payment.controller';
import { PaymentRepository } from './database/repository/payment.repository';
import { PaymentService } from './service/payment.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [AdapterModule],
  controllers: [PaymentController],
  providers: [PaymentRepository, PaymentService],
})
export class PaymentModule {}
