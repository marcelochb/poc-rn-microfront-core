import { PaymentEntity } from "../entities";
import { inject, injectable } from "tsyringe";
import { IPaymentRepository } from "../repositories";
import { CoreConstants } from "../../../../core";
interface IProps {
  id: string;
}
export interface IGetByPaymentUsecase {
  call({id}:IProps):Promise<PaymentEntity>;
}

@injectable()
export class GetByPaymentUsecase implements IGetByPaymentUsecase {

  constructor(
    @inject(CoreConstants.IPaymentRepository)
    private readonly repository: IPaymentRepository
  ) {}

  async call({id}:IProps): Promise<PaymentEntity> {
    return await this.repository.getBy({id});
  }

}