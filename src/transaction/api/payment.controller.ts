import { Controller, Get, Param } from '@nestjs/common';
import { PaymentService } from '../service/payment.service';

@Controller('api/v1/payments')
export class PaymentController {
  constructor(private readonly shipmentService: PaymentService) {}
  @Get('/:id')
  getPaymentById(@Param('id') id): Promise<any> {
    return this.shipmentService.getPaymentById(id);
  }
}
