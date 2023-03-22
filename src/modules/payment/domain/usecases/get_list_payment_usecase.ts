import { PaymentEntity } from "../entities";
import { inject, injectable } from "tsyringe";
import { IPaymentRepository } from "../repositories";
import { PaymentConstants } from "../../../../core";

export interface IGetListPaymentUsecase {
  call():Promise<PaymentEntity[]>;
}

@injectable()
export class GetListPaymentUsecase implements IGetListPaymentUsecase {

  constructor(
    @inject(PaymentConstants.IPaymentRepository)
    private readonly repository: IPaymentRepository
  ) {}

  async call(): Promise<PaymentEntity[]> {
    return await this.repository.getList();
  }

}