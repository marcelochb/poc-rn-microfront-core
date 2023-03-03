import { LoanEntity } from "../entities";

interface IProps {
  id: string;
}

export interface ILoanRepository {
  getList(): Promise<LoanEntity[]>;
  getBy({id}:IProps): Promise<LoanEntity>;
  create(loan:LoanEntity): Promise<void>;
}