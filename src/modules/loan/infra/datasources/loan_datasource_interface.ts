/* istanbul ignore file */
import { LoanModel } from "../models";

interface IProps {
  id: string;
}
export interface ILoanDatasource {
  getList(): Promise<LoanModel[]>;
  getBy({id}:IProps): Promise<LoanModel>;
  create(loan:LoanModel): Promise<void>;
}