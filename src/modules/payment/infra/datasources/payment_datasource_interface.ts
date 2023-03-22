/* istanbul ignore file */
import { PaymentModel } from "../models";

interface IProps {
  id: string;
}
export interface IPaymentDatasource {
  getList(): Promise<PaymentModel[]>;
  getBy({id}:IProps): Promise<PaymentModel>;
}