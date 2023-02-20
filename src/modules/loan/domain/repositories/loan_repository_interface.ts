import { LoanEntity } from "../entities";

interface IProps {
  id: string;
}

export interface ILoanRepository {
  getList(): Promise<LoanEntity[] | Error>;
  getBy({id}:IProps): Promise<LoanEntity | Error>;
}