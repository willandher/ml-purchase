import {HttpServiceAdapter} from "../../../shared/http-adapter/http-service.adapter";
import {Logger} from "@nestjs/common";

export class TransactionRepository{
  private readonly hostMock = process.env.HOST_MOCK;
  private readonly logger = new Logger(TransactionRepository.name);
  constructor(readonly httpServiceAdapter: HttpServiceAdapter) {
  }
}