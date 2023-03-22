import { inject, injectable } from "tsyringe";
import { CoreConstants } from "../../../../core/constants";
import { IPaymentRepository, PaymentEntity } from "../../domain";
import { IPaymentDatasource } from "../datasources";
import { PaymentModel } from "../models";

interface IProps {
  id: string;
}
@injectable()
export class PaymentRepository implements IPaymentRepository {
  constructor(
    @inject(CoreConstants.IPaymentDatasource)
    private readonly datasource: IPaymentDatasource
  ) {}

  async getList(): Promise<PaymentEntity[]> {
    const response = await this.datasource.getList() as PaymentModel[];
    return PaymentModel.toEntityList(response);
  }
  
  async getBy({ id }: IProps): Promise<PaymentEntity> {
    const response = await this.datasource.getBy({id});
    return PaymentModel.toEntity(response);
  }

  
}