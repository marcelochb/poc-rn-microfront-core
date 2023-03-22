/* istanbul ignore file */
import { PaymentEntity } from "../entities";

interface IProps {
  id: string;
}

export interface IPaymentRepository {
  getList(): Promise<PaymentEntity[]>;
  getBy({id}:IProps): Promise<PaymentEntity>;
}